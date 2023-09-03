import { Component, OnInit } from '@angular/core';
import { ApiService } from '@pricing-system/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { UploadActivityExcelComponent } from '../upload-activity-excel/upload-activity-excel.component';

@Component({
  selector: 'pricing-system-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss'],
})
export class ActivityListComponent implements OnInit {
  activitiesList: any[] = [];
  size = 300;
  page = 0;
  loading = false;
  totalItems = 0;
  currentPage = 0;
  nzPageSizeOptions = [10, 20, 50, 100, 150, 200, 250, 300];


  constructor(
    private service: ApiService,
    private modal : NzModalService
    ) {}

  ngOnInit(): void {
    this.getActivityList(this.size, this.page);
  }

  getActivityList(size: number, page: number) {
    this.loading = true;
    this.service.getPaginated({ size, page }, '/activity').subscribe({
      next: (res: any) => {
        this.activitiesList = res?.result?.content;
        console.log(this.activitiesList);
        this.totalItems = res?.result?.totalElements;
      },
      error: (err) => {
        console.log(err);
        this.loading = false;
      },
      complete: () => (this.loading = false),
    });
  }

  uploadExcel(){
    const uploadModal = this.modal.create({
      nzTitle: 'Upload Activity Excel',
      nzContent: UploadActivityExcelComponent
    })

    uploadModal.afterClose.subscribe((data) => {
      data ? this.getActivityList(this.size, this.page): ''
    })
  }

  pageIndexChange(index: any) {
    index = Number(index);
    this.currentPage = index;
    this.getActivityList(this.size, index - 1);
  }
  pageSizeChange(size: any) {
    size = Number(size);
    this.size = size;
    this.getActivityList(size, this.page);
  }
}
