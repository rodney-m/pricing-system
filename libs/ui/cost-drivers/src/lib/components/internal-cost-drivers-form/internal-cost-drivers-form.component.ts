import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '@pricing-system/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'pricing-system-internal-cost-drivers-form',
  templateUrl: './internal-cost-drivers-form.component.html',
  styleUrls: ['./internal-cost-drivers-form.component.scss'],
})
export class InternalCostDriversFormComponent implements OnInit {
  form!: FormGroup;
  editMode  = false;
  loading=false;
  constructor(
    private fb: FormBuilder,
    private service : ApiService,
    private notification : NzNotificationService,
    private modalRef: NzModalRef
    ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      aspect: ['', Validators.required],
      baseAmount: ['', Validators.required],
      newAmount: ['', Validators.required],
      comment: ['', Validators.required],
    });
  }

  cancel(){
    this.modalRef.close(false)
  }
  edit(){}
  submit(){
    this.loading = true;
    this.service.postToUrl('/internal-cost-driver', this.form.value).subscribe({
      next: ()=> {
        this.notification.success('Success', 'Internal Cost driver added successfully', {nzAnimate: true, nzDuration:4000});
        this.modalRef.close(true)
      },
      error: (err) => {
        console.log(err)
      },
      complete: () => {
        this.loading = false
      }
    })
  }
}
