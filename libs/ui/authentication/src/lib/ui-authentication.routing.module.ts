import { NgModule } from '@angular/core';
import { ContainerComponent } from './components/container/container.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes  = [
  {
    path: '',
    component : ContainerComponent,
    children: [
      {
        path: 'login', component : LoginComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiAuthenticationRoutingModule {}
