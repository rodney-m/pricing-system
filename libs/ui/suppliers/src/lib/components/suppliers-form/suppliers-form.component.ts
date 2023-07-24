import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '@pricing-system/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'pricing-system-suppliers-form',
  templateUrl: './suppliers-form.component.html',
  styleUrls: ['./suppliers-form.component.scss'],
})
export class SuppliersFormComponent implements OnInit {
  form!: FormGroup;
  editMode  = false;
  loading=false;
  @Input() supplier! :any; 
  constructor(
    private fb: FormBuilder,
    private service : ApiService,
    private notification : NzNotificationService,
    private modalRef: NzModalRef
    ) {}

    ngOnInit(): void {
      this.form = this.fb.group({
        name: ['', Validators.required],
        baseAmount: ['', Validators.required],
        newAmount: ['', Validators.required],
        description: ['', Validators.required],
      });
    }

    cancel(){
      this.modalRef.close(false)
    }
    edit(){}
    submit(){
      this.loading = true;
      this.service.postToUrl('/supplier-cost-driver', this.form.value).subscribe({
        next: ()=> {
          this.notification.success('Success', 'Supplier added successfully', {nzAnimate: true, nzDuration:4000});
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
