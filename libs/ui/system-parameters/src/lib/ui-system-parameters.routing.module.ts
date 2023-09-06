import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SystemParametersContainerComponent } from './pages/system-parameters-container/system-parameters-container.component';

const routes : Route[] = [
  {
    path: '',
    component: SystemParametersContainerComponent
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiSystemParametersRoutingModule {}
