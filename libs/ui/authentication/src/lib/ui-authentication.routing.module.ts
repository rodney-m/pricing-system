import { NgModule } from '@angular/core';
import { ContainerComponent } from './components/container/container.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes : Routes  = [
  {
    path: '',
    component : ContainerComponent,
    children: [
      {
        path: 'login', component : LoginComponent
      },
      {
        path: 'forgot-password', component : ForgotPasswordComponent
      },
      {
        path: 'reset-password', component : ResetPasswordComponent
      },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiAuthenticationRoutingModule {}
