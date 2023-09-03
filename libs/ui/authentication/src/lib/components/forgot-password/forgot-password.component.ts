import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '@pricing-system/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'pricing-system-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm! : FormGroup;
  resetSuccess = false;
  loading = false;
  email = ''
  constructor(
    private service : ApiService, 
    private fb : FormBuilder,
    private notification : NzNotificationService
    ){}


  ngOnInit(): void {
      this.forgotPasswordForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]]
      })
  }

  reset(){
    if (this.forgotPasswordForm.invalid){
      this.notification.error('Form Error', 'Make sure you fill in the form correctly', {nzAnimate: true, nzDuration: 4000});
      return;
    }
    this.loading = true;

    const formatedEmail = this.forgotPasswordForm.controls['email'].value.replace('@', '%40')
    this.service.postToUrl(`/auth/forgot-password?email=${formatedEmail}`, formatedEmail).subscribe({
      next: (res) => {
        this.email = this.forgotPasswordForm.controls['email'].value
        this.notification.success('Success', res.message ? res.message : `A password reset link has been sent to ${this.email}`, {nzAnimate: true, nzDuration:4000});
        this.forgotPasswordForm.reset();
        this.resetSuccess = true;
        this.loading = false;
      },
      error: (err) => {
        this.notification.error('Error' , err?.error?.message ? err?.error?.message : 'Failed to initiate password reset');
        this.loading = false;
      },
      complete:()=> this.loading = false
    })
    
  }
}
