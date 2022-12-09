import { Component, OnInit } from '@angular/core';
import { Credit } from './credit';
import { CreditService } from './credit.service';

@Component({
  selector: 'app-creditos',
  templateUrl: './creditos.component.html',
  styleUrls: ['./creditos.component.css']
})
export class CreditosComponent implements OnInit {
  credits : Array<Credit> = new Array<Credit>();
  constructor(private creditService: CreditService) { }

  getCredits(): void{
    this.creditService.getCredits().subscribe((credits) => {
      this.credits = credits;
    })
  }
  ngOnInit() {
    this.getCredits();
  }

}
