import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientService } from './../../services/common/http-client.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerType } from './../../base/base.component';
import { Directive, ElementRef, HostListener, Input, Output, Renderer2, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent, DeleteState } from 'src/app/dialogs/delete-dialog/delete-dialog.component';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';

declare var $: any;

@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(
    public dialog: MatDialog,
    private spinner: NgxSpinnerService,
    private element: ElementRef,
    private _renderer: Renderer2,
    private httpClientService: HttpClientService,
    private aletify: AlertifyService) {
    const img = _renderer.createElement("img");
    img.setAttribute("src", "../../../../../assets/remove.png");
    img.setAttribute("style", "cursor: pointer;");
    img.witdh = 25;
    img.height = 25;
    _renderer.appendChild(element.nativeElement, img);
  }
  @Input() id: string;
  @Input() controller: string;
  @Output() callback: EventEmitter<any> = new EventEmitter();
  @HostListener("click")
  async onclick() {
    this.openDialog(async () => {
      this.spinner.show(SpinnerType.Ball);
      const td: HTMLTableCellElement = this.element.nativeElement;
      this.httpClientService.delete({
        controller: this.controller,
      }, this.id).subscribe(data => {
        $(td.parentElement).animate({
          opacity: 0,
          left: "+=50",
          height: "toogle"
        }, 700, () => {
          this.callback.emit();
          this.aletify.message("Process completed successfuly", {
            dismissOther: true,
            messageType: MessageType.Success,
            position: Position.TopRight
          });
        });
      }, (errorResponse: HttpErrorResponse) => {
        this.spinner.hide(SpinnerType.Ball);
        this.aletify.message("An error occurred while remove operation", {
          dismissOther: true,
          messageType: MessageType.Error,
          position: Position.TopRight
        });
      });
    });
  }

  openDialog(afterClosed: any): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: DeleteState.Yes
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == DeleteState.Yes) {
        afterClosed();
      }
    });
  }
}
