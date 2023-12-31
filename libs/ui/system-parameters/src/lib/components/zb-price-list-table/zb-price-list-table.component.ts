import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { ZbPricesFormComponent } from '../zb-prices-form/zb-prices-form.component';
import { ApiService } from '@pricing-system/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'pricing-system-zb-price-list-table',
  templateUrl: './zb-price-list-table.component.html',
  styleUrls: ['./zb-price-list-table.component.scss'],
})
export class ZbPriceListTableComponent {
  constructor(private modal : NzModalService, private service : ApiService, private notification : NzNotificationService){}
  @Input() prices :any  = []
  @Input() isLoading   = false
  @Input() size   = 0
  @Input() totalItems   = 0
  @Input() currentPage   = 0

  @Output() pageIndexEvent = new EventEmitter<number>();
  @Output() pageSizeEvent = new EventEmitter<number>();
  @Output() refresh = new EventEmitter();


  pageIndexChange(pageIndex: number){
    this.pageIndexEvent.emit(pageIndex);
  }


  pageSizeChange(pageSize : number){
    this.pageSizeEvent.emit(pageSize);
  }

  edit(bank: any) {
    const editModal = this.modal.create({
      nzContent: ZbPricesFormComponent,
      nzTitle: 'Edit prices',
      nzComponentParams: { bankPrices: bank },
    });

    editModal.afterClose.subscribe((data) => {
      if (data) this.refresh.emit()
    });
  }

  delete(id : number){
    console.log(id);

    this.service.delete(`/product-offering/${id}`).subscribe({
      next: (res) => {
        this.refresh.emit();
        this.notification.success('Success', 'Successfully deleted' )

      },
      error: (err) => {
        this.notification.error('Error', err?.erroccr?.message ? err?.error?.message : 'Failed to delete' )
      }
    })
  }
  
}
