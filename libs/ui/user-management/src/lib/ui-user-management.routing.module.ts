import { NgModule } from '@angular/core';
import { UserAccountsListComponent } from './pages/user-accounts-list/user-accounts-list.component';
import { RouterModule, Route } from '@angular/router';

const routes : Route[] = [
  {
    path : '',
    component : UserAccountsListComponent
  }
]

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports : [RouterModule],
})
export class UiUserManagementRoutingModule {}
