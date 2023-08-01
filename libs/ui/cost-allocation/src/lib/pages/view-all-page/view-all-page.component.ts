import { Component, OnInit } from '@angular/core';
import { ApiService } from '@pricing-system/core';

@Component({
  selector: 'pricing-system-view-all-page',
  templateUrl: './view-all-page.component.html',
  styleUrls: ['./view-all-page.component.scss'],
})
export class ViewAllPageComponent implements OnInit {
  costAllocations: any[] = [];
  size = 10;
  page = 0;
  loading = false;
  totalItems = 0;
  currentPage = 0;
  months:string[] =[]

  constructor(private service : ApiService){}

  getRevenue(month: string, monthlyRevenues: any[]): string {
    const revenueObj = monthlyRevenues.find((item: any) => item.month === month);
    return revenueObj ? revenueObj.revenue : '';
  }
  getVolumeTransactionCount(month: string, volumeTransactionCount: any[]): string {
    const tranCountObj = volumeTransactionCount.find((item: any) => item.month === month);
    return tranCountObj ? tranCountObj.tranCount : '';
  }
  getMonthlyRevenueLineUnitCostsZWL(month: string, monthlyRevenueLineUnitCostsZWL: any[]): string {
    const revenueObj = monthlyRevenueLineUnitCostsZWL.find((item: any) => item.month === month);
    return revenueObj ? revenueObj.revenue : '';
  }

  ngOnInit(): void {
      this.getCostAllocations(this.size, this.page);
      this.months = Object.values(MONTHS);
  }

  getCostAllocations(size : number, page : number){
    this.loading = true;
    this.service.getPaginated({size, page},'/cost-allocation').subscribe({
      next: (res:any) => {
        this.costAllocations = res?.result?.content
      }, error: (err) => {
        console.log(err);
        this.loading = false;
      },
      complete: () => this.loading = false
    })
  }

  edit(data : any){

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

enum MONTHS {
  JANUARY = 'JANUARY',
  FEBRUARY = 'FEBRUARY',
  MARCH = 'MARCH',
  APRIL = 'APRIL',
  MAY = 'MAY',
  JUNE = 'JUNE',
 
}


// enum MONTHS {
//   JANUARY = 'JAN',
//   FEBRUARY = 'FEB',
//   MARCH = 'MAR',
//   APRIL = 'APR',
//   MAY = 'MAY',
//   JUNE = 'JUN',
//   JULY = 'JUL',
//   AUGUST = 'AUG',
//   SEPTEMBER = 'SEPT',
//   OCTOBER = 'OCT',
//   NOVEMBER = 'NOV',
//   DECEMBER = 'DEC',
// }
