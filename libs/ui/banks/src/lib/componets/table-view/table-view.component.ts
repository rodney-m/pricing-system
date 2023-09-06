import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {IField} from '@pricing-system/data'
@Component({
  selector: 'pricing-system-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss'],
})
export class TableViewComponent implements OnInit, OnChanges {
  @Input() fields! : IField[];
  @Input() data : any  = {};
  display: IField[] = [];

  constructor(){}

  ngOnInit(){
    this.load()
  }

  ngOnChanges(){
    this.load()
  }
  filterUndefined() { return this.fields ? this.fields.filter(f => f.value != null) : [] };

  load() {
    if (!this.fields) return;
    if (!this.data) this.data = {};
    this.fields.filter(field => field.value == null).forEach(field => field.value = this.data[field.name]);
    this.display = this.fields.filter(field => field.value != null);
  }
}
