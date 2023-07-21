import { Component, OnInit } from '@angular/core';
import { ZbPricesFormComponent } from '../zb-prices-form/zb-prices-form.component';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ApiService } from '@pricing-system/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'pricing-system-zb-prices-list',
  templateUrl: './zb-prices-list.component.html',
  styleUrls: ['./zb-prices-list.component.scss'],
})
export class ZbPricesListComponent implements OnInit {
  prices : any[] = [];
  isLoading = false;
  size = 10;
  page = 0;
  loading = false;
  totalItems = 0;
  currentPage = 0;

  // @Output() refresh = new EventEmitter();

  constructor(
    private modal : NzModalService,
    private service: ApiService,
    private notification: NzNotificationService
    ){}


  openModal(){
    const pricesModal = this.modal.create({
      nzContent: ZbPricesFormComponent,
      nzTitle: 'Capture ZB prices'
    })

    pricesModal.afterClose.subscribe((data) => {
      data ? this.refresh() : ''
    })
  }

  ngOnInit(): void {
      this.getPrices(this.size, this.page)
  }

  refresh(){
    this.getPrices(this.size, this.page)
  }


  getPrices(size: number, page: number) {
    this.isLoading = true;
    this.service.getPaginated({ size, page }, '/zb').subscribe({
      next: (res: any) => {
        this.prices = res.result.content;
        this.totalItems = res.result.totalElements;
        this.currentPage = res.result.pageable.pageNumber;
        this.size = res.result.pageable.pageSize;
      },
      error: (err) => console.log(err),
      complete: () => (this.isLoading = false),
    });
  }

  pageIndexChange(index: any) {
    this.getPrices(this.size, index--);
  }
  pageSizeChange(size: number) {
    this.getPrices(size, this.page);
  }

}
