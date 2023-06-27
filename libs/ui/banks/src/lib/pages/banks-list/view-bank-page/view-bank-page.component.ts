import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '@pricing-system/core';
import { Bank } from '@pricing-system/data';

@Component({
  selector: 'pricing-system-view-bank-page',
  templateUrl: './view-bank-page.component.html',
  styleUrls: ['./view-bank-page.component.scss'],
})
export class ViewBankPageComponent implements OnInit {
  bank! : Bank;
  constructor(private service : ApiService, private activatedRoute : ActivatedRoute){}

  ngOnInit(): void {
      this.getBank();
  }

  getBank(){
    const id = this.activatedRoute.snapshot.params['id']
    this.service.getFromUrl(`/bank/${id}`).subscribe({
      next:(res) => {
        this.bank = res.result

        console.log(this.bank)
      }
    })
  }
}
