import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from './../../base/base.component';
import { ProductService } from './../../services/common/models/product.service';
import { Directive, ElementRef, HostListener, Input, Output, Renderer2, EventEmitter } from '@angular/core';

declare var $: any;

@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(
    private spinner: NgxSpinnerService,
    private element: ElementRef,
    private _renderer: Renderer2,
    private ProductService: ProductService) {
    const img = _renderer.createElement("img");
    img.setAttribute("src", "../../../../../assets/remove.png");
    img.setAttribute("style", "cursor: pointer;");
    img.witdh = 25;
    img.height = 25;
    _renderer.appendChild(element.nativeElement, img);
  }
  @Input() id: string;
  @Output() callback: EventEmitter<any> = new EventEmitter();
  @HostListener("click")
  async onclick() {
    this.spinner.show(SpinnerType.Ball);
    const td: HTMLTableCellElement = this.element.nativeElement;
    await this.ProductService.delete(this.id);
    $(td.parentElement).fadeOut(1000, () => {
      this.callback.emit();
      this.spinner.hide(SpinnerType.Ball)
    });
  }

}
