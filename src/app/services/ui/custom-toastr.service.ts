import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {

  constructor(private toastr: ToastrService) { }

  message(message: string, title: string, toastrOptions: Partial<ToastrOptions>) {
    this.toastr[toastrOptions.messageType](message, title, {
      positionClass: toastrOptions.position
    })
  }
}

export class ToastrOptions {
  messageType: ToastrMessageType;
  position: ToastrPosition
}

export enum ToastrMessageType {
  Error = "error",
  Info = "info",
  Success = "success",
  Warning = "warning",
}

export enum ToastrPosition {
  TopRight = "toast-top-right",
  TopCenter = "toast-top-center",
  TopLeft = "toast-top-left",
  TopFull = "toast-top-full-width",
  BottomRight = "toast-bottom-right",
  BottomCenter = "toast-bottom-center",
  BottomLeft = "toast-bottom-left",
  BottomFull = "toast-bottom-full-width"
}
