import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '@pricing-system/core';
import { Bank } from '@pricing-system/data';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'pricing-system-banks-form',
  templateUrl: './banks-form.component.html',
  styleUrls: ['./banks-form.component.scss'],
})
export class BanksFormComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  editMode = false;
  @Input() public bank! : Bank;
  constructor(
    private fb: FormBuilder, 
    private modalRef : NzModalRef, 
    private service : ApiService,
    private notification : NzNotificationService
    ) {}

  ngOnInit(): void {
    this.innitializeForm();

    console.log(this.bank)
    if(this.bank){
      this.editMode = true;
      this.prefillData()
    }
  }

  prefillData(){
      this.form.patchValue({name: this.bank.name})
      this.form.patchValue({minPriceZWL: this.bank.minPriceZWL})
      this.form.patchValue({percentagePriceZWL: this.bank.percentagePriceZWL})
      this.form.patchValue({maxPriceZWL: this.bank.maxPriceZWL})
      this.form.patchValue({minPriceUSD: this.bank.minPriceUSD})
      this.form.patchValue({percentagePriceUSD: this.bank.percentagePriceUSD})
      this.form.patchValue({maxPriceUSD: this.bank.maxPriceUSD})
  }

  get formControls(){
    return this.form.controls
  }

  innitializeForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      minPriceZWL: ['', Validators.required],
      percentagePriceZWL: ['', Validators.required],
      maxPriceZWL: ['', Validators.required],
      minPriceUSD: ['', Validators.required],
      percentagePriceUSD: ['', Validators.required],
      maxPriceUSD: ['', Validators.required],
    });
  }

  submit(){
    this.loading = true;
    this.service.postToUrl('/bank', this.form.value).subscribe({
      next: ()=> {
        this.notification.success('Success', 'Competitor added successfully', {nzAnimate: true, nzDuration:4000});
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
  cancel(){
    this.modalRef.close()
  }

  editBank(){
    this.loading = true;
    this.service.updateToUrl(`/bank/${this.bank.id}`, this.form.value).subscribe({
      next:()=> {
        this.notification.success('Success', 'Competitor updated successfully', {nzAnimate: true, nzDuration:4000});
        this.modalRef.close(true)
      },
      error: (err) => console.log(err),
      complete: () => {
        this.loading = false;
      }

    })
  }
}
