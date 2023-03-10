import { Component, OnInit } from '@angular/core';
import { ToteBag } from '../toteBag.interface';
import { ToteBagsService } from '../toteBags.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  toteBags: ToteBag[] = [];

  constructor(private toteBagsService: ToteBagsService) { }

  ngOnInit(): void {
    this.getToteBags();
  }

  getToteBags(): void {
    this.toteBagsService.getToteBags()
      .subscribe(toteBags => this.toteBags = toteBags.slice(1, 5));
  }
}
