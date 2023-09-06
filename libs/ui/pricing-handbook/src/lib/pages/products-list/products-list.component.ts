import { Component, OnInit } from '@angular/core';
import { ApiService } from '@pricing-system/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ProductFormComponent } from '../../components/product-form/product-form.component';

@Component({
  selector: 'pricing-system-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  constructor(
    private modal: NzModalService, 
    private service: ApiService,
    ) {}
  products: any[] = [];
  size = 10;
  page = 0;
  loading = false;
  totalItems = 0;
  currentPage = 0;

  openModal() {
    const banksModal = this.modal.create({
      nzTitle: 'Add a revenue line',
      nzContent: ProductFormComponent,
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
      .getPaginated({ size, page }, '/product-offering')
      .subscribe({
        next: (res: any) => {
          this.products = res.result.content;
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


  edit(product : any){
    const editModal = this.modal.create({
      nzContent: ProductFormComponent,
      nzTitle: 'Edit product offering',
      nzComponentParams: { product : product}
    })

    editModal.afterClose.subscribe((data) => {
      if (data) this.getBanks(this.size, this.page);
    });
  }

  delete(id: number){

  }
}
