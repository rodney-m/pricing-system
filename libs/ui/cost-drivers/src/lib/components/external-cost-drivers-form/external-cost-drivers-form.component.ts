import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '@pricing-system/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'pricing-system-external-cost-drivers-form',
  templateUrl: './external-cost-drivers-form.component.html',
  styleUrls: ['./external-cost-drivers-form.component.scss'],
})
export class ExternalCostDriversFormComponent implements OnInit {
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
    this.service.postToUrl('/external-cost-driver', this.form.value).subscribe({
      next: ()=> {
        this.notification.success('Success', 'External Cost driver added successfully', {nzAnimate: true, nzDuration:4000});
        this.modalRef.close(true)
      },
      error: (err) => {
        console.log(err)
        this.loading =false;
      },
      complete: () => {
        this.loading = false
      }
    })
  }
}
