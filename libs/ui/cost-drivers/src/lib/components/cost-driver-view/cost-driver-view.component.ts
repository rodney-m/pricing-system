import { Component, Input } from '@angular/core';

@Component({
  selector: 'pricing-system-cost-driver-view',
  templateUrl: './cost-driver-view.component.html',
  styleUrls: ['./cost-driver-view.component.scss'],
})
export class CostDriverViewComponent {
  @Input() costDriver!: any;
  @Input() loading = false;
}
