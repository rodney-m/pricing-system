import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '@pricing-system/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'pricing-system-pricing-handbook-form',
  templateUrl: './pricing-handbook-form.component.html',
  styleUrls: ['./pricing-handbook-form.component.scss'],
})
export class PricingHandbookFormComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  editMode = false;
  @Input() bankPrices! : any;
  banks : any[] = []
  products : any[] = []
  constructor(
    private fb: FormBuilder, 
    private modalRef : NzModalRef, 
    private service : ApiService,
    private notification : NzNotificationService
    ) {}

  ngOnInit(): void {
    this.getInstitutions();
    this.getProducts()
    this.innitializeForm();

    console.log(this.bankPrices)
    if(this.bankPrices){
      this.editMode = true;
      this.prefillData()
    }
  }

  prefillData(){
      this.form.patchValue({name: this.bankPrices.name})
      // this.form.patchValue({minPriceZWL: this.bank.minPriceZWL})
      // this.form.patchValue({percentagePriceZWL: this.bank.percentagePriceZWL})
      // this.form.patchValue({maxPriceZWL: this.bank.maxPriceZWL})
      // this.form.patchValue({minPriceUSD: this.bank.minPriceUSD})
      // this.form.patchValue({percentagePriceUSD: this.bank.percentagePriceUSD})
      // this.form.patchValue({maxPriceUSD: this.bank.maxPriceUSD})
  }

  get formControls(){
    return this.form.controls
  }

  innitializeForm() {
    this.form = this.fb.group({
      productOfferingId: [0, Validators.required],
      institutionId: [0, Validators.required],
      minPriceZWL: ['', Validators.required],
      percentagePriceZWL: ['', Validators.required],
      maxPriceZWL: ['', Validators.required],
      minPriceUSD: ['', Validators.required],
      percentagePriceUSD: ['', Validators.required],
      maxPriceUSD: ['', Validators.required],
    });
  }

  getProducts(){
    this.service.getPaginated({page: 0, size: 200},'/product-offering').subscribe({
      next: (res : any)=> {
        this.products = res.result.content
      }
    })
  }
  getInstitutions(){
    this.service.getPaginated({size: 50, page: 0}, '/institution').subscribe({
      next: (res : any)=> {
        this.banks = res.result.content
        
      }
    })
  }

  submit(){

    this.loading = true;
    this.service.postToUrl('/pricing-hand-book', this.form.value).subscribe({
      next: ()=> {
        this.notification.success('Success', 'Price captured successfully', {nzAnimate: true, nzDuration:4000});
        this.modalRef.close(true)
      },
      error: (err) => {
        console.log(err)
        this.notification.warning('Error occurred', 'Failed to save prices', {nzAnimate: true, nzDuration:4000});

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
    this.service.updateToUrl(`/institution/${this.bankPrices.id}`, this.form.value).subscribe({
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
