import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { UserAccountsFormComponent } from '../../components/user-accounts-form/user-accounts-form.component';
import { ApiService } from '@pricing-system/core';

@Component({
  selector: 'pricing-system-user-accounts-list',
  templateUrl: './user-accounts-list.component.html',
  styleUrls: ['./user-accounts-list.component.scss'],
})
export class UserAccountsListComponent {

  constructor(
    private modal : NzModalService,
    private service : ApiService
    ){}
  userAccounts: any[] =[]

  openModal(){
    const modalRef = this.modal.create({
      nzTitle: 'Create a user account',
      nzContent: UserAccountsFormComponent
    })

    modalRef.afterClose.subscribe((data) => {
      data ? this.getUsers : ''
    })
    
  }

  getUsers(){
    this.service.getFromUrl('')
  }
}
