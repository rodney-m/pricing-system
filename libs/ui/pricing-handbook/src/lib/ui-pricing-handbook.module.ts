import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { PricingHandbookListComponent } from './pages/pricing-handbook-list/pricing-handbook-list.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { NgZorroComponentsModule } from '@pricing-system/core';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { PricingHandbookFormComponent } from './components/pricing-handbook-form/pricing-handbook-form.component';

const routes: Route[] = [
  {
    path: '',
    component: PricingHandbookListComponent,
  },
  {
    path: 'products',
    component: ProductsListComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgZorroComponentsModule,
  ],
  exports: [RouterModule],
  declarations: [
    PricingHandbookListComponent,
    ProductsListComponent,
    ProductFormComponent,
    PricingHandbookFormComponent,
  ],
})
export class UiPricingHandbookModule {}
