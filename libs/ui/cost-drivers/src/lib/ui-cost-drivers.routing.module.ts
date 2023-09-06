import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CostDriversListPageComponent } from './pages/cost-drivers-list-page/cost-drivers-list-page.component';

const routes : Route[] = [
  {
    path: '', component: CostDriversListPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiCostDriversRoutingModule {}
