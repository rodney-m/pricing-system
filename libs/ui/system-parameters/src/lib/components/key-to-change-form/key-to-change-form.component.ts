import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '@pricing-system/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'pricing-system-key-to-change-form',
  templateUrl: './key-to-change-form.component.html',
  styleUrls: ['./key-to-change-form.component.scss'],
})
export class KeyToChangeFormComponent implements OnInit {
  @Input() changeType! :any;

  form!: FormGroup;
  editMode = false;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private service: ApiService,
    private notification: NzNotificationService,
    private modalRef: NzModalRef
  ) {}

  cancel(){
    this.modalRef.close(false);
  }
  submit(){
    this.loading = true;

    const id = this.changeType?.calculatedVariance === 'POSITIVE' ? 2 : 1

    this.service.updateToUrl(`/change/${id}`, {...this.form.value, calculatedVariance: this.changeType?.calculatedVariance, id : id }).subscribe({
      next: ()=> {
        this.notification.success('Success', 'Key to change updated successfully', {nzAnimate: true, nzDuration:4000});
        this.modalRef.close(true)
      },
      error: (err) => {
        this.notification.error('Error', err?.error?.message ? err?.error?.message : 'Failed to update ZB Key to change');
        this.loading = false;
      },
      complete: () => {
        this.loading = false
      }
    })
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      percentageIncreaseOrDecrease: ['', Validators.required],
      deviationFromMarketAvg: ['', Validators.required],
    });

    if (this.changeType){
      this.form.patchValue({percentageIncreaseOrDecrease : this.changeType?.percentageIncreaseOrDecrease})
      this.form.patchValue({deviationFromMarketAvg : this.changeType?.deviationFromMarketAvg})
    }

  
  }


}
