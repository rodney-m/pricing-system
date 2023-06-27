import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CalculationsComponent } from './pages/calculations/calculations.component';

const routes : Route[] =[
  {
    path: '',
    component: CalculationsComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiCalculationsRoutingModule {}
