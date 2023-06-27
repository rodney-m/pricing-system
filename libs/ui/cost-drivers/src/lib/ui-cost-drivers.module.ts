import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCostDriversRoutingModule } from './ui-cost-drivers.routing.module';
import { CostDriversListPageComponent } from './pages/cost-drivers-list-page/cost-drivers-list-page.component';
import { NgZorroComponentsModule } from '@pricing-system/core';
import { ExternalCostDriversFormComponent } from './components/external-cost-drivers-form/external-cost-drivers-form.component';
import { InternalCostDriversFormComponent } from './components/internal-cost-drivers-form/internal-cost-drivers-form.component';
import { CostDriversTableComponent } from './components/cost-drivers-table/cost-drivers-table.component';

@NgModule({
  imports: [CommonModule, UiCostDriversRoutingModule, NgZorroComponentsModule],
  declarations: [
    CostDriversListPageComponent,
    ExternalCostDriversFormComponent,
    InternalCostDriversFormComponent,
    CostDriversTableComponent,
  ],
})
export class UiCostDriversModule {}
