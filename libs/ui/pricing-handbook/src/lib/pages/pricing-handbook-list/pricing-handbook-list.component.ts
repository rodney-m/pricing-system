import { Component, OnInit } from '@angular/core';
import { ApiService } from '@pricing-system/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { PricingHandBookModel } from '@pricing-system/data';
import { PricingHandbookFormComponent } from '../../components/pricing-handbook-form/pricing-handbook-form.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'pricing-system-pricing-handbook-list',
  templateUrl: './pricing-handbook-list.component.html',
  styleUrls: ['./pricing-handbook-list.component.scss'],
})
export class PricingHandbookListComponent implements OnInit {
  constructor(
    private modal: NzModalService,
    private fb: FormBuilder,
    private service: ApiService,
    private notification: NzNotificationService
  ) {}
  prices: any[] = [];
  products: any[] = [];
  banks: any[] = [];
  size = 10;
  page = 0;
  tableLoader = false;
  loading = false;
  totalItems = 0;
  currentPage = 0;
  filteringForm!: FormGroup;
  handBookLoading = false;
  previousSearch = '';

  openModal() {
    const pricesModal = this.modal.create({
      nzTitle: 'Capture prices',
      nzContent: PricingHandbookFormComponent,
    });

    pricesModal.afterClose.subscribe((data) => {
      if (data) this.getPrices(this.size, this.page);
    });
  }

  ngOnInit(): void {
    this.getPrices(this.size, this.page);
    this.getProducts();
    this.getInstitutions();

    this.filteringForm = this.fb.group({
      instituition: [0],
      product: [0],
    });
  }

  filter() {
    console.log(this.filteringForm.value);
    if (
      !this.filteringForm.controls['instituition'].value &&
      !this.filteringForm.controls['product'].value
    ) {
      this.notification.warning(
        'Warning',
        'Select at least one property to use for filtering',
        { nzAnimate: true, nzDuration: 4000 }
      );
      return;
    } else if (!this.filteringForm.controls['instituition'].value) {
      this.filterPricingHandBook(this.size, this.page, filteringUrls.byProduct);
    } else if (!this.filteringForm.controls['product'].value) {
      this.filterPricingHandBook(
        this.size,
        this.page,
        filteringUrls.byInstitution
      );
    } else {
      // this.filterByProductAndInstituition();
      console.log('both');
    }
  }

  filterPricingHandBook(size: number, page: number, url: string) {
    this.previousSearch = url;
    this.loading = true;
    let filteringId;
    if (url === filteringUrls.byInstitution) {
      filteringId = this.filteringForm.controls['instituition'].value;
    } else if (url === filteringUrls.byProduct) {
      filteringId = this.filteringForm.controls['product'].value;
    } else {
      return;
    }
    this.service.getPaginated({ size, page }, url+`/${filteringId}`).subscribe({
      next: (res: any) => {
        this.prices = res.result.content;
        this.totalItems = res.result.totalElements;
        this.currentPage = res.result.pageable.pageNumber;
        this.size = res.result.pageable.pageSize;
        this.loading = false;

        this.previousSearch = url;
      },
      error: (err: any) => {
        console.log(err);
        this.loading = false;
      },
      complete: () => (this.loading = false),
    });
  }

  getPrices(size: number, page: number) {
    this.tableLoader = true;
    this.service.getPaginated({ size, page }, '/pricing-hand-book').subscribe({
      next: (res: any) => {
        this.prices = res.result.content;
        this.totalItems = res.result.totalElements;
        this.currentPage = res.result.pageable.pageNumber;
        this.size = res.result.pageable.pageSize;
      },
      error: (err) => console.log(err),
      complete: () => (this.tableLoader = false),
    });
  }

  pageIndexChange(index: any) {
    this.getPrices(this.size, index--);
  }
  pageSizeChange(size: number) {
    this.getPrices(size, this.page);
  }

  getProducts() {
    this.service
      .getPaginated({ page: 0, size: 200 }, '/product-offering')
      .subscribe({
        next: (res: any) => {
          this.products = res.result.content;
        },
      });
  }
  getInstitutions() {
    this.service.getPaginated({ size: 50, page: 0 }, '/institution').subscribe({
      next: (res: any) => {
        this.banks = res.result.content;
      },
    });
  }

  edit(bank: PricingHandBookModel) {
    const editModal = this.modal.create({
      nzContent: PricingHandbookFormComponent,
      nzTitle: 'Edit prices',
      nzComponentParams: { bankPrices: bank },
    });

    editModal.afterClose.subscribe((data) => {
      if (data) this.getPrices(this.size, this.page);
    });
  }

  delete(id: number) {}
}

enum filteringUrls {
  byProduct = '/pricing-hand-book/product',
  byInstitution = '/pricing-hand-book/institution',
  byProductAndInstitution = '',
}
