import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ViewAllPageComponent } from './pages/view-all-page/view-all-page.component';
import { CostAllocationFormComponent } from './pages/cost-allocation-form/cost-allocation-form.component';
import { ActivityListComponent } from './pages/activity-list/activity-list.component';
import { BudgetedCostsListComponent } from './pages/budgeted-costs-list/budgeted-costs-list.component';
import { VolumesListComponent } from './pages/volumes-list/volumes-list.component';
import { CostAllocationListComponent } from './pages/cost-allocation-list/cost-allocation-list.component';

const routes: Route[] = [
  {
    path: '',
    component: CostAllocationListComponent,
  },
  {
    path: 'form',
    component: CostAllocationFormComponent,
  },
  {
    path: 'activity',
    component: ActivityListComponent,
  },
  {
    path: 'budgeted-costs',
    component: BudgetedCostsListComponent,
  },
  {
    path: 'volume',
    component: VolumesListComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class UiCostAllocationRoutingModule {}
