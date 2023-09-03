import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroComponentsModule } from '@pricing-system/core';
import { CostAllocationFormComponent } from './pages/cost-allocation-form/cost-allocation-form.component';
import { UiCostAllocationRoutingModule } from './ui-cost-allocation.routing.module';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { ViewAllPageComponent } from './pages/view-all-page/view-all-page.component';
import { ActivityListComponent } from './pages/activity-list/activity-list.component';
import { UploadActivityExcelComponent } from './pages/upload-activity-excel/upload-activity-excel.component';
import { BudgetedCostsListComponent } from './pages/budgeted-costs-list/budgeted-costs-list.component';
import { UploadBudgetedCostExcelComponent } from './pages/upload-budgeted-cost-excel/upload-budgeted-cost-excel.component';
import { VolumesListComponent } from './pages/volumes-list/volumes-list.component';
import { UploadVolumeExcelComponent } from './pages/uploadVolumeExcel/upload-volume-excel.component';
import { CostAllocationListComponent } from './pages/cost-allocation-list/cost-allocation-list.component';

@NgModule({
  imports: [
    CommonModule,
    UiCostAllocationRoutingModule,
    NgZorroComponentsModule,
    NzPaginationModule,
  ],
  declarations: [
    CostAllocationFormComponent,
    ViewAllPageComponent,
    ActivityListComponent,
    UploadActivityExcelComponent,
    BudgetedCostsListComponent,
    UploadBudgetedCostExcelComponent,
    VolumesListComponent,
    UploadVolumeExcelComponent,
    CostAllocationListComponent,
  ],
})
export class UiCostAllocationModule {}
