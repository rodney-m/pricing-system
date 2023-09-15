import { Component, OnInit } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { KeyToChangeFormComponent } from '../key-to-change-form/key-to-change-form.component';
import { ApiService } from '@pricing-system/core';

@Component({
  selector: 'pricing-system-key-to-zb-change-table',
  templateUrl: './key-to-zb-change-table.component.html',
  styleUrls: ['./key-to-zb-change-table.component.scss'],
})
export class KeyToZbChangeTableComponent implements OnInit {

  constructor(private modal : NzModalService, private service : ApiService){}

  loading = false;

  negativeVariance!:any;
  positiveVariance!:any;


  edit(type : any){

    console.log(type)
    const editModal = this.modal.create({
      nzContent: KeyToChangeFormComponent,
      nzComponentParams: {changeType : type }
    })

    editModal.afterClose.subscribe((data) => {
      if (data) {
        this.getKeyToChange()
      }
    })
  }

  getKeyToChange(){
    this.loading = true;
    this.service.getFromUrl('/change/1').subscribe({
      next: (res) => {
        console.log(res);
        this.negativeVariance = res.result
        this.loading =false;
      },
      error: (err) => {
        console.log(err)
        this.loading = false;
      },
      complete: ()=> this.loading =false
    })
    this.service.getFromUrl('/change/2').subscribe({
      next: (res) => {
        console.log(res);
        this.positiveVariance = res.result
        this.loading =false;
      },
      error: (err) => {
        console.log(err)
        this.loading = false;
      },
      complete: ()=> this.loading =false
    })
  }

  ngOnInit(): void {
      this.getKeyToChange()
  }
}
