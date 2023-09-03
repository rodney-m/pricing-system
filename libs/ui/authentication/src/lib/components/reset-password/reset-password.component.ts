import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '@pricing-system/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'pricing-system-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  token = '';
  resetPasswordForm! : FormGroup;
  loading  = false;

  constructor(
    private activatedRoute : ActivatedRoute, 
    private service : ApiService, 
    private fb : FormBuilder,
    private notification : NzNotificationService,
    private router: Router

    ){}
  ngOnInit(): void {
      this.token = this.activatedRoute.snapshot.queryParams['token'];
      this.resetPasswordForm = this.fb.group({
        password : ['', Validators.required],
        confirmPassword : ['', Validators.required]
      })
  }

  submit(){
    if(this.resetPasswordForm.controls['password'].value !== this.resetPasswordForm.controls['confirmPassword'].value){
      this.notification.warning('Passwords mismatch', 'Password and Confirm passwords fields should match', {nzAnimate: true, nzDuration: 4000});
      return;
    }

    this.loading = false;

    this.service.postToUrl(`reset?token=${this.token}&newPassword=${this.resetPasswordForm.controls['password'].value}`, {}).subscribe({
      next: () => {
        this.loading = false;
        this.notification.success('Success', 'Password reseted successfully, Login with your new password', {nzAnimate: true, nzDuration: 6000});
        this.router.navigateByUrl('/auth/login')
      },
      error: (err) => {
        this.loading = false;
        this.notification.success('Failed', err.error.message ? err.error.message : 'to reset password' )
      },
      complete: ()=> this.loading = false
    })
  }
}
