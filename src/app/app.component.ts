import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ECommerce.UI';

  constructor() {}
  ngOnInit(): void {}
}
// $.get('https://localhost:7278/api/products', (data: any) => {
//   console.log(data);
// });
