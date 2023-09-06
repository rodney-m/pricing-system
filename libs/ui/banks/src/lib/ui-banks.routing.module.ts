import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BanksListComponent } from './pages/banks-list/banks-list.component';
import { ViewBankPageComponent } from './pages/banks-list/view-bank-page/view-bank-page.component';

const routes : Route[] = [
  {
    path: '',
    component: BanksListComponent
  },
  {
    path: ':id',
    component: ViewBankPageComponent
  }
]

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule],
})
export class UiBanksRoutingModule {}
