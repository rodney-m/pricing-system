import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import * as internal from 'stream';
import { InternalCostDriversFormComponent } from '../../components/internal-cost-drivers-form/internal-cost-drivers-form.component';
import { ExternalCostDriversFormComponent } from '../../components/external-cost-drivers-form/external-cost-drivers-form.component';
import { CostDriver } from '@pricing-system/data';
import { ApiService } from '@pricing-system/core';

@Component({
  selector: 'pricing-system-cost-drivers-list-page',
  templateUrl: './cost-drivers-list-page.component.html',
  styleUrls: ['./cost-drivers-list-page.component.scss'],
})
export class CostDriversListPageComponent implements OnInit {
  internalCostDrivers : CostDriver[] = []
  externalCostDrivers : CostDriver[] = []
  size = 10;
  page = 0;
  internalTotalItems = 0;
  internalCurrentPage = 0;
  internalPageSize = 0;
  internalLoading = false;

  externalTotalItems = 0;
  externalCurrentPage = 0;
  externalPageSize = 0;
  externalLoading = false;


  constructor(
    private modal: NzModalService,
    private service : ApiService
    ){}

    ngOnInit(): void {
        this.getInternalCostDrivers()
    }

  openInternal(){
    const internalModal = this.modal.create({
      nzTitle: 'Add Internal',
      nzContent: InternalCostDriversFormComponent,
    })
  }
  openExternal(){
    const internalModal = this.modal.create({
      nzTitle: 'Add External',
      nzContent: ExternalCostDriversFormComponent,
    })
  }


  getExternalCostDrivers(){

    this.externalLoading = true;

    this.service.getPaginated({page: this.page ,size: this.size},'/external-cost-driver').subscribe({
      next: (res :any) => {
        this.externalCostDrivers = res.result.content;
        this.externalTotalItems = res.result.totalElements;
        this.externalCurrentPage = res.result.pageable.pageNumber;
        this.externalPageSize = res.result.pageable.pageSize;

         this.externalLoading = false;

      },
      error: (err) => {
        this.externalLoading = false;
        console.log(err)
      },
      complete: () => {
        this.externalLoading = false;
      }
    })
  }
  getInternalCostDrivers(){

    this.internalLoading = true;

    this.service.getPaginated({page: this.page ,size: this.size},'/internal-cost-driver').subscribe({
      next: (res :any) => {
        this.internalCostDrivers = res.result.content;
        this.internalTotalItems = res.result.totalElements;
        this.internalCurrentPage = res.result.pageable.pageNumber;
        this.internalPageSize = res.result.pageable.pageSize;

         this.internalLoading = false;

      },
      error: (err) => {
        this.internalLoading = false;
        console.log(err)
      },
      complete: () => {
        this.internalLoading = false;
      }
    })
  }

  externalPaginationEvent(event :any){
    console.log(event)
    this.externalLoading = true;

    this.service.getPaginated({page: event.page ,size: event.size},'/external-cost-driver').subscribe({
      next: (res :any) => {
        this.externalCostDrivers = res.result.content;
        this.externalTotalItems = res.result.totalElements;
        this.externalCurrentPage = res.result.pageable.pageNumber;
        this.externalPageSize = res.result.pageable.pageSize;

         this.externalLoading = false;

      },
      error: (err) => {
        this.externalLoading = false;
        console.log(err)
      },
      complete: () => {
        this.externalLoading = false;
      }
    })
  }
  internalPaginationEvent(event :any){
    console.log(event)
    this.internalLoading = true;

    this.service.getPaginated({page: event.page ,size: event.size},'/internal-cost-driver').subscribe({
      next: (res :any) => {
        this.internalCostDrivers = res.result.content;
        this.internalTotalItems = res.result.totalElements;
        this.internalCurrentPage = res.result.pageable.pageNumber;
        this.internalPageSize = res.result.pageable.pageSize;

         this.internalLoading = false;

      },
      error: (err) => {
        this.internalLoading = false;
        console.log(err)
      },
      complete: () => {
        this.internalLoading = false;
      }
    })
  }
}
