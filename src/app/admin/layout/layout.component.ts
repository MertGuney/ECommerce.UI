import { AlertifyService, MessageType, Position } from './../../services/admin/alertify.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  
  constructor(private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.alertify.message("Alertify Service Test", {
      messageType: MessageType.Success,
      delay: 5,
      position: Position.TopRight,
      dismissOther: true
    })
  }

}
