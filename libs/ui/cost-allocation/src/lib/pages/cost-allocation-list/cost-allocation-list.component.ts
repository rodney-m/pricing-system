import { Component, OnInit } from '@angular/core';
import { ApiService } from '@pricing-system/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'pricing-system-cost-allocation-list',
  templateUrl: './cost-allocation-list.component.html',
  styleUrls: ['./cost-allocation-list.component.scss'],
})
export class CostAllocationListComponent implements OnInit {
  costAllocations: any[] = [];
  size = 10;
  page = 0;
  loading = false;
  totalItems = 0;
  currentPage = 0;
  nzPageSizeOptions = [10, 20, 50, 100];


  constructor(private service : ApiService, private notification : NzNotificationService){}

  ngOnInit(): void {
    this.getCostAllocations(this.size, this.page);
}
  
  getCostAllocations(size : number, page : number){
    this.loading = true;
    this.service.getPaginated({size, page},'/cost-allocation').subscribe({
      next: (res:any) => {
        this.costAllocations = res?.result?.content
      }, error: (err) => {
        console.log(err);
        console.log(err);
        this.notification.error('Error', err?.error?.message ? err?.error?.message  :'Error occurred');
        this.loading = false;
      },
      complete: () => this.loading = false
    })
  }

  pageIndexChange(index: any) {
    index = Number(index);
    this.getCostAllocations(this.size, index--)
  }
  pageSizeChange(size: any) {
    size = Number(size);
    this.getCostAllocations(size, this.page );
  }
}
