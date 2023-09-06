import { Component, OnInit } from '@angular/core';
import { ApiService } from '@pricing-system/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { UploadBudgetedCostExcelComponent } from '../upload-budgeted-cost-excel/upload-budgeted-cost-excel.component';

@Component({
  selector: 'pricing-system-budgeted-costs-list',
  templateUrl: './budgeted-costs-list.component.html',
  styleUrls: ['./budgeted-costs-list.component.scss'],
})
export class BudgetedCostsListComponent implements OnInit {
  budgetedCostsList: any[] = [];
  size = 20;
  page = 0;
  loading = false;
  totalItems = 0;
  currentPage = 0;
  nzPageSizeOptions = [10, 20, 50, 100];
  
  constructor(
    private service: ApiService,
    private modal : NzModalService
    ) {}
    ngOnInit(): void {
      this.getBudgetedCostsList(this.size, this.page);
    }

    uploadExcel(){
      const uploadModal = this.modal.create({
        nzTitle: 'Upload Budgeted Cost Excel',
        nzContent: UploadBudgetedCostExcelComponent
      })
  
      uploadModal.afterClose.subscribe((data) => {
        data ? this.getBudgetedCostsList(this.size, this.page): ''
      })
    }

    getBudgetedCostsList(size: number, page: number) {
      this.loading = true;
      this.service.getPaginated({ size, page }, '/budgeted-cost').subscribe({
        next: (res: any) => {
          this.budgetedCostsList = res?.result?.content;
          console.log(this.budgetedCostsList);
          this.totalItems = res?.result?.totalElements;
        },
        error: (err) => {
          console.log(err);
          this.loading = false;
        },
        complete: () => (this.loading = false),
      });
    }

    pageIndexChange(index: any) {
      index = Number(index);
      this.currentPage = index;
      this.getBudgetedCostsList(this.size, index - 1);
    }
    pageSizeChange(size: any) {
      size = Number(size);
      this.size = size;
      this.getBudgetedCostsList(size, this.page);
    }

  }
