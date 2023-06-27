import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import * as internal from 'stream';
import { InternalCostDriversFormComponent } from '../../components/internal-cost-drivers-form/internal-cost-drivers-form.component';
import { ExternalCostDriversFormComponent } from '../../components/external-cost-drivers-form/external-cost-drivers-form.component';

@Component({
  selector: 'pricing-system-cost-drivers-list-page',
  templateUrl: './cost-drivers-list-page.component.html',
  styleUrls: ['./cost-drivers-list-page.component.scss'],
})
export class CostDriversListPageComponent {

  constructor(private modal: NzModalService){}

  openInternal(){
    const internalModal = this.modal.create({
      nzTitle: 'Add Internal',
      nzContent: InternalCostDriversFormComponent,
    })
  }
  openExternal(){
    const internalModal = this.modal.create({
      nzTitle: 'Add External',
      nzContent: ExternalCostDriversFormComponent,
    })
  }
}
