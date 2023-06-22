import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { HttpClientModule } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';


@NgModule({
  imports: [CommonModule, RouterModule, OverlayModule,
    HttpClientModule,
    NzBreadCrumbModule,
    NzIconModule,
    NzMenuModule,
    NzToolTipModule,
    NzButtonModule,],
  declarations: [ContainerComponent, SideMenuComponent, TopNavComponent],
  exports: [ContainerComponent],
})
export class UiLayoutModule {}
