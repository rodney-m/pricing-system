import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '@pricing-system/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'pricing-system-edit-cost-driver',
  templateUrl: './edit-cost-driver.component.html',
  styleUrls: ['./edit-cost-driver.component.scss'],
})
export class EditCostDriverComponent implements OnInit {
  @Input() costDriver!: any;
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
  submit(){}

  ngOnInit(): void {
    this.form = this.fb.group({
      avgIncreaseInSupplier: [0, Validators.required],
      weightAllocatedToSupplierCost: [0, Validators.required],
      weightedCostIncreaseToSupplierCost: [0, Validators.required],
      avgIncreaseInFuelCost: [0, Validators.required],
      weightAllocatedToFuelCost: [0, Validators.required],
      weightedCostIncreaseToFuelCost: [0, Validators.required],
      momInflationIncrease: [0, Validators.required],
      weightAllocatedToMoMInflation: [0, Validators.required],
      weightedCostIncreaseToMomInflation: [0, Validators.required],
      marketExchangeRateDepreciation: [0, Validators.required],
      weightAllocatedToMarketExchangeRateDepreciation: [0, Validators.required],
      weightedCostIncreaseToMarketExchangeRate: [0, Validators.required],
    });

    if (this.costDriver) {
      this.patchValues()
    }
  }

  patchValues() {
    this.form.patchValue({avgIncreaseInSupplier : this.costDriver?.avgIncreaseInSupplier})
    this.form.patchValue({weightAllocatedToSupplierCost : this.costDriver?.weightAllocatedToSupplierCost})
    this.form.patchValue({weightedCostIncreaseToSupplierCost : this.costDriver?.weightedCostIncreaseToSupplierCost})
    this.form.patchValue({avgIncreaseInFuelCost : this.costDriver?.avgIncreaseInFuelCost})
    this.form.patchValue({weightAllocatedToFuelCost : this.costDriver?.weightAllocatedToFuelCost})
    this.form.patchValue({weightedCostIncreaseToFuelCost : this.costDriver?.weightedCostIncreaseToFuelCost})
    this.form.patchValue({momInflationIncrease : this.costDriver?.momInflationIncrease})
    this.form.patchValue({weightAllocatedToMoMInflation : this.costDriver?.weightAllocatedToMoMInflation})
    this.form.patchValue({weightedCostIncreaseToMomInflation : this.costDriver?.weightedCostIncreaseToMomInflation})
    this.form.patchValue({marketExchangeRateDepreciation : this.costDriver?.marketExchangeRateDepreciation})
    this.form.patchValue({weightAllocatedToMarketExchangeRateDepreciation : this.costDriver?.weightAllocatedToMarketExchangeRateDepreciation})
    this.form.patchValue({weightedCostIncreaseToMarketExchangeRate : this.costDriver?.weightedCostIncreaseToMarketExchangeRate})
  }
}
