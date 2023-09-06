import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SuppliersListComponent } from './pages/suppliers-list/suppliers-list.component';


const routes : Route[] = [
  {
    path : '',
    component: SuppliersListComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiSuppliersRoutingModule {}
