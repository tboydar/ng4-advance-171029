import { Component, OnInit } from '@angular/core';
import { initDashboard } from './init';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }  // 時間太早 new 就馬上執行

  ngOnInit() {             // Init
    $(initDashboard);
  }

  goCards(type: number) {
    // this.router.navigateByUrl('/cards/' + type);
    // this.router.navigateByUrl('/cards/' + type + ';key1=hello;key2=world');

    this.router.navigateByUrl('/cards/' + type + '?key1=hello&key2=world');
  }

  goCards2(type: number) {
    // this.router.navigate(['/cards', type]);
    // this.router.navigate(['/cards', type, { key1: 'hello', key2: 'world' }]);
    this.router.navigate(['/cards', type], { queryParams: { key1: 'hello', key2: 'world' } });

  }

}
