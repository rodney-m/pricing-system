import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BanksListComponent } from './pages/banks-list/banks-list.component';
import { UiBanksRoutingModule } from './ui-banks.routing.module';
import { NgZorroComponentsModule } from '@pricing-system/core';
import { BanksFormComponent } from './componets/banks-form/banks-form.component';
import { ViewBankPageComponent } from './pages/banks-list/view-bank-page/view-bank-page.component';
import { TableViewComponent } from './componets/table-view/table-view.component';

@NgModule({
  imports: [CommonModule, UiBanksRoutingModule, NgZorroComponentsModule],
  declarations: [
    BanksListComponent,
    BanksFormComponent,
    ViewBankPageComponent,
    TableViewComponent,
  ],
})
export class UiBanksModule {}
