import { Component, EventEmitter, Input, Output } from '@angular/core';
import {CostDriver} from '@pricing-system/data'
@Component({
  selector: 'pricing-system-cost-drivers-table',
  templateUrl: './cost-drivers-table.component.html',
  styleUrls: ['./cost-drivers-table.component.scss'],
})
export class CostDriversTableComponent {
  @Input() size = 10;
  @Input() totalItems = 0;
  @Input() currentPage = 0;
  @Input() costDrivers : CostDriver[] =[];
  @Input() loading = false;
  @Output() pagenationEvent : EventEmitter<any> = new EventEmitter()

  pageIndexChange(pageIndex : number) {
    this.pagenationEvent.emit({
      page: pageIndex--, size: this.size
    })

    console.log("fired pa page index")

  }
  pageSizeChange(pageSize: number) {
    this.pagenationEvent.emit({
      page: this.currentPage, size: pageSize
    })

    console.log("fired pa page size")
  }

  edit(data: any){

  }
}
