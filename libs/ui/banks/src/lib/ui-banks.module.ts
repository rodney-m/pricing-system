import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BanksListComponent } from './pages/banks-list/banks-list.component';
import { UiBanksRoutingModule } from './ui-banks.routing.module';
import { NgZorroComponentsModule } from '@pricing-system/core';
import { BanksFormComponent } from './componets/banks-form/banks-form.component';

@NgModule({
  imports: [CommonModule, UiBanksRoutingModule, NgZorroComponentsModule],
  declarations: [BanksListComponent, BanksFormComponent],
})
export class UiBanksModule {}
