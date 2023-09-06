import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '@pricing-system/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Location } from '@angular/common'

@Component({
  selector: 'pricing-system-cost-allocation-form',
  templateUrl: './cost-allocation-form.component.html',
  styleUrls: ['./cost-allocation-form.component.scss'],
})
export class CostAllocationFormComponent implements OnInit {
  costAllocationForm!: FormGroup;
  products: any[] = [];
  months: string[] = [];
  loading = false;

  constructor(private service: ApiService, private notification : NzNotificationService, private location : Location) {}

  ngOnInit(): void {
    this.innitializeForm();
    this.getProducts();
    this.months = Object.values(MONTHS);
  }

  innitializeForm() {
    this.costAllocationForm = new FormGroup({
      productOfferingId: new FormControl(0, [Validators.required]),
      channel: new FormControl('', [Validators.required]),
      activity: new FormControl('', [Validators.required]),
      weight: new FormControl('', [Validators.required]),
      monthlyRevenues: new FormArray([
        new FormGroup({
          id: new FormControl(0),
          month: new FormControl('', Validators.required),
          revenue: new FormControl(0, Validators.required),
        }),
      ]),
      volumeTransactionCount: new FormArray([
        new FormGroup({
          id: new FormControl(0),
          month: new FormControl('', Validators.required),
          tranCount: new FormControl(0, Validators.required),
        }),
      ]),
    });
  }

  get monthlyRevenuesFormControl() {
    return this.costAllocationForm.get('monthlyRevenues') as FormArray;
  }

  get volumeTransactionCountFormControl() {
    return this.costAllocationForm.get('volumeTransactionCount') as FormArray;
  }

  addMonthlyRevenue() {
    const control = <FormArray>(
      this.costAllocationForm.controls['monthlyRevenues']
    );
    control.push(
      new FormGroup({
        id: new FormControl(0),
        month: new FormControl(''),
        revenue: new FormControl(0),
      })
    );
  }

  removeMonthlyRevenue(index: number) {
    const control = <FormArray>(
      this.costAllocationForm.controls['monthlyRevenues']
    );
    control.removeAt(index);
  }


  addVolumeTransactionCount() {
    const control = <FormArray>(
      this.costAllocationForm.controls['volumeTransactionCount']
    );
    control.push(
      new FormGroup({
        id: new FormControl(0),
        month: new FormControl(''),
        tranCount: new FormControl(0),
      })
    );
  }

  removeVolumeTransactionCount(index: number) {
    const control = <FormArray>(
      this.costAllocationForm.controls['volumeTransactionCount']
    );
    control.removeAt(index);
  }

  getProducts() {
    this.service
      .getPaginated({ page: 0, size: 200 }, '/product-offering')
      .subscribe({
        next: (res: any) => {
          this.products = res.result.content;
        },
      });
  }

  submit(){
    this.toggleLoading()
    this.service.postToUrl('/cost-allocation', this.costAllocationForm.value).subscribe({
      next: () => {
        this.notification.success('Success' ,'Prices captured');
        this.costAllocationForm.reset();
        setTimeout(() => this.location.back(), 1500)
      },
      error: (err) => {
        console.log(err)
        this.notification.error('Error' ,err?.error?.message ? err?.error?.message : 'Failed to capture prices')
      },
      complete: () => this.toggleLoading()
    })
  }

  toggleLoading(){
    this.loading = !this.loading
  }

}
enum MONTHS {
  JANUARY = 'JANUARY',
  FEBRUARY = 'FEBRUARY',
  MARCH = 'MARCH',
  APRIL = 'APRIL',
  MAY = 'MAY',
  JUNE = 'JUNE',
  JULY = 'JULY',
  AUGUST = 'AUGUST',
  SEPTEMBER = 'SEPTEMBER',
  OCTOBER = 'OCTOBER',
  NOVEMBER = 'NOVEMBER',
  DECEMBER = 'DECEMBER',
}
