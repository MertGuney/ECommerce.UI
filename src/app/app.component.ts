import { BaseComponent, SpinnerType } from './base/base.component';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ECommerce.UI';

  constructor() { }
  ngOnInit(): void {
  }

}
