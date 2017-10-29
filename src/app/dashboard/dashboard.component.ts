import { Component, OnInit } from '@angular/core';
import { initDashboard } from './init';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }  // 時間太早 new 就馬上執行

  ngOnInit() {             // Init
    $(initDashboard);
  }

}
