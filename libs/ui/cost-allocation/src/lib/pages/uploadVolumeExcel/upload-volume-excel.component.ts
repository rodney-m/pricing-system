import { Component } from '@angular/core';
import { ApiService } from '@pricing-system/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'pricing-system-upload-volume-excel',
  templateUrl: './upload-volume-excel.component.html',
  styleUrls: ['./upload-volume-excel.component.scss'],
})
export class UploadVolumeExcelComponent {
  fileList: NzUploadFile[] | any[]= [];
  loading = false;

  constructor(private service : ApiService, private notification : NzNotificationService, private modalRef : NzModalRef){}

  beforeUpload = (file: NzUploadFile): boolean => {
    this.fileList = this.fileList.concat(file);
    return false;
  };

  upload(){
    const formData = new FormData();
    
    this.loading = true;
    formData.append('file', this.fileList[0]);
    this.service.postToUrl('/volume', formData).subscribe({
      next: () => {
        this.notification.success('Success', 'Budgeted cost values uploaded', {nzAnimate: true, nzDuration: 4000});
        this.modalRef.close(true);
      },
      error: (err) => {
        this.notification.error('Error', err.error.message ? err.error.message : 'Failed to upload budgeted costs data' );
        this.loading = false;
      },
      complete: () => this.loading =false
    })
  }

  cancel(){
    this.modalRef.close(false);
  }
}
