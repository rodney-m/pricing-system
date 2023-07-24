import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppliersListComponent } from './pages/suppliers-list/suppliers-list.component';
import { UiSuppliersRoutingModule } from './ui-suppliers.module.routing';
import { NgZorroComponentsModule } from '@pricing-system/core';
import { SuppliersFormComponent } from './components/suppliers-form/suppliers-form.component';

@NgModule({
  imports: [CommonModule, UiSuppliersRoutingModule, NgZorroComponentsModule],
  declarations: [SuppliersListComponent, SuppliersFormComponent],
})
export class UiSuppliersModule {}
