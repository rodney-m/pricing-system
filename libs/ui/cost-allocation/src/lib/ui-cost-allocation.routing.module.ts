import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ViewAllPageComponent } from './pages/view-all-page/view-all-page.component';
import { CostAllocationFormComponent } from './pages/cost-allocation-form/cost-allocation-form.component';

const routes: Route[] = [
  {
    path: '',
    component: ViewAllPageComponent,
  },
  {
    path: 'form',
    component: CostAllocationFormComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class UiCostAllocationRoutingModule {}
