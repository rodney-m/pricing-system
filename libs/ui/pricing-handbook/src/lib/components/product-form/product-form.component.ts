import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '@pricing-system/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'pricing-system-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit{
  form!: FormGroup;
  loading = false;
  editMode = false;
  @Input() public product! : any;
  constructor(
    private fb: FormBuilder, 
    private modalRef : NzModalRef, 
    private service : ApiService,
    private notification : NzNotificationService
    ) {}

  ngOnInit(): void {
    this.innitializeForm();

    console.log(this.product)
    if(this.product){
      this.editMode = true;
      this.prefillData()
    }
  }

  prefillData(){
      this.form.patchValue({description: this.product.description})
      
  }

  get formControls(){
    return this.form.controls
  }

  innitializeForm() {
    this.form = this.fb.group({
      description: ['', Validators.required],
    });
  }

  submit(){
    this.loading = true;
    this.service.postToUrl('/product-offering', this.form.value).subscribe({
      next: ()=> {
        this.notification.success('Success', 'Product Item added successfully', {nzAnimate: true, nzDuration:4000});
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

  editProduct(){
    this.loading = true;
    this.service.updateToUrl(`/product-offering/${this.product.id}`, this.form.value).subscribe({
      next:()=> {
        this.notification.success('Success', 'Product item updated successfully', {nzAnimate: true, nzDuration:4000});
        this.modalRef.close(true)
      },
      error: (err) => console.log(err),
      complete: () => {
        this.loading = false;
      }

    })
  }
}
