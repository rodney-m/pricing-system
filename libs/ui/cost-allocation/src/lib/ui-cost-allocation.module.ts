import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroComponentsModule } from '@pricing-system/core';
import { CostAllocationFormComponent } from './pages/cost-allocation-form/cost-allocation-form.component';
import { UiCostAllocationRoutingModule } from './ui-cost-allocation.routing.module';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { ViewAllPageComponent } from './pages/view-all-page/view-all-page.component';


@NgModule({
  imports: [
    CommonModule,
    UiCostAllocationRoutingModule,
    NgZorroComponentsModule,
    NzPaginationModule
  ],
  declarations: [CostAllocationFormComponent, ViewAllPageComponent],
})
export class UiCostAllocationModule {}
