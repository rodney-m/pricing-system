import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '@pricing-system/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'pricing-system-user-accounts-form',
  templateUrl: './user-accounts-form.component.html',
  styleUrls: ['./user-accounts-form.component.scss'],
})
export class UserAccountsFormComponent implements OnInit {
  form!: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private modalRef: NzModalRef,
    private service: ApiService,
    private message: NzMessageService,
    private notification: NzNotificationService
  ) {}
  ngOnInit(): void {
    this.innitializeForm();
  }

  innitializeForm() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['admin123', Validators.required],
    });
  }

  cancel() {
    this.modalRef.close();
  }

  createUser() {
    if (this.form.invalid) {
      this.message.warning('Fill in all required fields');
      return;
    }
    this.isLoading = true;

    this.service.postToUrl('/auth/user', this.form.value).subscribe({
      next: () => {
        this.notification.success('Success', 'User created successfully', {nzAnimate: true, nzDuration: 4000});
        this.modalRef.close(true)
      },
      error: () => {
        this.notification.error('Error', 'Failed to create user', {nzAnimate: true, nzDuration: 4000})
        this.isLoading = false;
      },
      complete: ()=> {
        this.isLoading = false;
      }
    });
  }
}
