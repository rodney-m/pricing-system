import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BanksListComponent } from './pages/banks-list/banks-list.component';

const routes : Route[] = [
  {
    path: '',
    component: BanksListComponent
  }
]

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule],
})
export class UiBanksRoutingModule {}
