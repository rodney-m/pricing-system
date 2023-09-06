import { Component, OnInit } from '@angular/core';
import { NzModalService, NzModalRef } from 'ng-zorro-antd/modal';
import { BanksFormComponent } from '../../componets/banks-form/banks-form.component';
import { Bank } from '@pricing-system/data';
import { ApiService } from '@pricing-system/core';


@Component({
  selector: 'pricing-system-banks-list',
  templateUrl: './banks-list.component.html',
  styleUrls: ['./banks-list.component.scss'],
})
export class BanksListComponent implements OnInit {
  constructor(
    private modal: NzModalService, 
    private service: ApiService,
    ) {}
  banks: any[] = [];
  size = 10;
  page = 0;
  loading = false;
  totalItems = 0;
  currentPage = 0;

  openModal() {
    const banksModal = this.modal.create({
      nzTitle: 'Add a bank',
      nzContent: BanksFormComponent,
    });

    banksModal.afterClose.subscribe((data) => {
      if (data) this.getBanks(this.size, this.page);
    });
  }

  ngOnInit(): void {
    this.getBanks(this.size, this.page);
  }

  getBanks(size : number, page : number) {
    this.loading = true;
    this.service
      .getPaginated({ size, page }, '/institution')
      .subscribe({
        next: (res: any) => {
          this.banks = res.result.content;
          this.totalItems = res.result.totalElements;
          this.currentPage = res.result.pageable.pageNumber;
          this.size = res.result.pageable.pageSize;
        },
        error: (err) => console.log(err),
        complete: () => (this.loading = false),
      });
  }

  pageIndexChange(index: any) {
    this.getBanks(this.size, index--)
  }
  pageSizeChange(size: number) {
    this.getBanks(size, this.page );
  }


  edit(bank : Bank){
    const editModal = this.modal.create({
      nzContent: BanksFormComponent,
      nzTitle: 'Edit competitor',
      nzComponentParams: { bank : bank}
    })

    editModal.afterClose.subscribe((data) => {
      if (data) this.getBanks(this.size, this.page);
    });
  }

  delete(id: number){

  }
}
