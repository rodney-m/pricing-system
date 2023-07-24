import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCostDriversRoutingModule } from './ui-cost-drivers.routing.module';
import { CostDriversListPageComponent } from './pages/cost-drivers-list-page/cost-drivers-list-page.component';
import { NgZorroComponentsModule } from '@pricing-system/core';
import { ExternalCostDriversFormComponent } from './components/external-cost-drivers-form/external-cost-drivers-form.component';
import { InternalCostDriversFormComponent } from './components/internal-cost-drivers-form/internal-cost-drivers-form.component';
import { CostDriversTableComponent } from './components/cost-drivers-table/cost-drivers-table.component';
import { CostDriverViewComponent } from './components/cost-driver-view/cost-driver-view.component';
import { EditCostDriverComponent } from './components/edit-cost-driver/edit-cost-driver.component';

@NgModule({
  imports: [CommonModule, UiCostDriversRoutingModule, NgZorroComponentsModule],
  declarations: [
    CostDriversListPageComponent,
    ExternalCostDriversFormComponent,
    InternalCostDriversFormComponent,
    CostDriversTableComponent,
    CostDriverViewComponent,
    EditCostDriverComponent,
  ],
})
export class UiCostDriversModule {}
