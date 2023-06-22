import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiAuthenticationRoutingModule } from './ui-authentication.routing.module';
import { ApiService, AuthService, NgZorroComponentsModule } from '@pricing-system/core';
import { HttpClientModule } from '@angular/common/http';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UiAuthenticationRoutingModule,
    HttpClientModule, 
    NgZorroComponentsModule
  ],
  declarations: [ContainerComponent, LoginComponent],
  providers: [
    ApiService,
    AuthService,
    HttpClientModule,
    NzNotificationService
  ]
})
export class UiAuthenticationModule {}
