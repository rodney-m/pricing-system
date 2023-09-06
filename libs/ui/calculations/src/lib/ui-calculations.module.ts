import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiCalculationsRoutingModule } from './ui-calculations.routing.module';
import { CalculationsComponent } from './pages/calculations/calculations.component';
import { NgZorroComponentsModule } from '@pricing-system/core';

@NgModule({
  imports: [CommonModule, UiCalculationsRoutingModule, NgZorroComponentsModule],
  declarations: [CalculationsComponent],
})
export class UiCalculationsModule {}
