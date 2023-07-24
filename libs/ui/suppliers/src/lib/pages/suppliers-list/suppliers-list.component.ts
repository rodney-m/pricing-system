import { Component, OnInit } from '@angular/core';
import { ApiService } from '@pricing-system/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { SuppliersFormComponent } from '../../components/suppliers-form/suppliers-form.component';

@Component({
  selector: 'pricing-system-suppliers-list',
  templateUrl: './suppliers-list.component.html',
  styleUrls: ['./suppliers-list.component.scss'],
})
export class SuppliersListComponent implements OnInit {
  suppliers :any[] = []

  size = 10;
  page = 0;
  loading = false;
  totalItems = 0;
  currentPage = 0;
  constructor(
    private modal: NzModalService, 
    private service: ApiService,
    ) {}

    ngOnInit(){
      this.getSuppliers(this.size, this.page)
    }

    pageIndexChange(index: any) {
      this.getSuppliers(this.size, index--)
    }
    pageSizeChange(size: number) {
      this.getSuppliers(size, this.page );
    }

    openModal() {
      const banksModal = this.modal.create({
        nzTitle: 'Add a Supplier',
        nzContent: SuppliersFormComponent,
      });
  
      banksModal.afterClose.subscribe((data) => {
        if (data) this.getSuppliers(this.size, this.page);
      });
    }
  
  
    edit(supplier : any){
      const editModal = this.modal.create({
        nzContent: SuppliersFormComponent,
        nzTitle: 'Edit competitor',
        nzComponentParams: { supplier : supplier}
      })
  
      editModal.afterClose.subscribe((data) => {
        if (data) this.getSuppliers(this.size, this.page);
      });
    }

    getSuppliers(size : number, page : number) {
      this.loading = true;
      this.service
        .getPaginated({ size, page }, '/supplier-cost-driver')
        .subscribe({
          next: (res: any) => {
            this.suppliers = res.result.content;
            this.totalItems = res.result.totalElements;
            this.currentPage = res.result.pageable.pageNumber;
            this.size = res.result.pageable.pageSize;
          },
          error: (err) => console.log(err),
          complete: () => (this.loading = false),
        });
    }
  
    delete(id: number){
  
    }


}
