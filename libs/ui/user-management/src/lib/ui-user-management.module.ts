import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAccountsListComponent } from './pages/user-accounts-list/user-accounts-list.component';
import { UiUserManagementRoutingModule } from './ui-user-management.routing.module';
import { NgZorroComponentsModule } from '@pricing-system/core';
import { UserAccountsFormComponent } from './components/user-accounts-form/user-accounts-form.component';

@NgModule({
  imports: [
    CommonModule,
    UiUserManagementRoutingModule,
    NgZorroComponentsModule,
  ],
  declarations: [UserAccountsListComponent, UserAccountsFormComponent],
})
export class UiUserManagementModule {}
