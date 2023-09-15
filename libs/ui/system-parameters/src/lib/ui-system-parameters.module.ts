import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemParametersContainerComponent } from './pages/system-parameters-container/system-parameters-container.component';
import { UiSystemParametersRoutingModule } from './ui-system-parameters.routing.module';
import { NgZorroComponentsModule } from '@pricing-system/core';
import { ZbPricesListComponent } from './components/zb-prices-list/zb-prices-list.component';
import { ZbPricesFormComponent } from './components/zb-prices-form/zb-prices-form.component';
import { ZbPriceListTableComponent } from './components/zb-price-list-table/zb-price-list-table.component';
import { KeyToZbChangeTableComponent } from './components/key-to-zb-change-table/key-to-zb-change-table.component';
import { KeyToChangeFormComponent } from './components/key-to-change-form/key-to-change-form.component';

@NgModule({
  imports: [
    CommonModule,
    UiSystemParametersRoutingModule,
    NgZorroComponentsModule,
  ],
  declarations: [
    SystemParametersContainerComponent,
    ZbPricesListComponent,
    ZbPricesFormComponent,
    ZbPriceListTableComponent,
    KeyToZbChangeTableComponent,
    KeyToChangeFormComponent,
  ],
})
export class UiSystemParametersModule {}
