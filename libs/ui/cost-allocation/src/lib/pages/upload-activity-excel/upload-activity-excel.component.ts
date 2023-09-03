import { Component } from '@angular/core';
import { ApiService } from '@pricing-system/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzUploadFile } from 'ng-zorro-antd/upload';

@Component({
  selector: 'pricing-system-upload-activity-excel',
  templateUrl: './upload-activity-excel.component.html',
  styleUrls: ['./upload-activity-excel.component.scss'],
})
export class UploadActivityExcelComponent {
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
    this.service.postToUrl('/activity', formData).subscribe({
      next: () => {
        this.notification.success('Success', 'Activitiy values uploaded', {nzAnimate: true, nzDuration: 4000});
        this.modalRef.close(true);
      },
      error: (err) => {
        this.notification.error('Error', err.error.message ? err.error.message : 'Failed to upload activity data' );
        this.loading = false;
      },
      complete: () => this.loading =false
    })
  }

  cancel(){
    this.modalRef.close(false);
  }

}
