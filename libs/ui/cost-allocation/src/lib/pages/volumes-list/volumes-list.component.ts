import { Component, OnInit } from '@angular/core';
import { ApiService } from '@pricing-system/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { UploadBudgetedCostExcelComponent } from '../upload-budgeted-cost-excel/upload-budgeted-cost-excel.component';
import { UploadVolumeExcelComponent } from '../uploadVolumeExcel/upload-volume-excel.component';

@Component({
  selector: 'pricing-system-volumes-list',
  templateUrl: './volumes-list.component.html',
  styleUrls: ['./volumes-list.component.scss'],
})
export class VolumesListComponent implements OnInit {
  volumesList: any[] = [];
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
      this.getVolumesList(this.size, this.page);
    }

    uploadExcel(){
      const uploadModal = this.modal.create({
        nzTitle: 'Upload Volume Excel',
        nzContent: UploadVolumeExcelComponent
      })
  
      uploadModal.afterClose.subscribe((data) => {
        data ? this.getVolumesList(this.size, this.page): ''
      })
    }

    getVolumesList(size: number, page: number) {
      this.loading = true;
      this.service.getPaginated({ size, page }, '/volume').subscribe({
        next: (res: any) => {
          this.volumesList = res?.result?.content;
          console.log(this.volumesList);
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
      this.getVolumesList(this.size, index - 1);
    }
    pageSizeChange(size: any) {
      size = Number(size);
      this.size = size;
      this.getVolumesList(size, this.page);
    }

}
