import { Component, OnInit } from '@angular/core';
import { ApiService } from '@pricing-system/core';

@Component({
  selector: 'pricing-system-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.scss'],
})
export class CalculationsComponent implements OnInit {
  results :any[] = [];
  loading = false;
  constructor(private service : ApiService){}
  ngOnInit(): void {
      this.getCalculations()
  }

  getCalculations(){
    this.service.getFromUrl('/bank/mean-median').subscribe({
      next: (res: any) => {
        this.results = [res.result]
        console.log(this.results)
      },
      error: (err: any) => {
        console.log(err)
        this.loading = false
      },
      complete: () => {
        this.loading = false;
      }
    })
  }
}
