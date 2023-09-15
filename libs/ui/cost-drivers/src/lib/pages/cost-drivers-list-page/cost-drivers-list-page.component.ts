import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import * as internal from 'stream';
import { InternalCostDriversFormComponent } from '../../components/internal-cost-drivers-form/internal-cost-drivers-form.component';
import { ExternalCostDriversFormComponent } from '../../components/external-cost-drivers-form/external-cost-drivers-form.component';
import { CostDriver } from '@pricing-system/data';
import { ApiService } from '@pricing-system/core';
import { EditCostDriverComponent } from '../../components/edit-cost-driver/edit-cost-driver.component';

@Component({
  selector: 'pricing-system-cost-drivers-list-page',
  templateUrl: './cost-drivers-list-page.component.html',
  styleUrls: ['./cost-drivers-list-page.component.scss'],
})
export class CostDriversListPageComponent implements OnInit {
  costDriver! : any;
  loading = false;

  constructor(
    private modal: NzModalService,
    private service : ApiService
    ){}

    ngOnInit(): void {
        this.getCostDrivers()
    }

    edit(){
      const editModal = this.modal.create({
        nzContent: EditCostDriverComponent,
        nzComponentParams: {costDriver : this.costDriver}
      })

      editModal.afterClose.subscribe((data) => {
        if (data) {
          this.getCostDrivers()
        }
      })
    }


    getCostDrivers(){
      this.loading = true;
      this.service.getFromUrl('/constant-external-cost-driver/final-table').subscribe({
        next: (res) => {
          this.costDriver = res.result;
        },
        error: () => {
          this.loading = false;
        },
        complete: () => this.loading = false
      })
    }

 
}
