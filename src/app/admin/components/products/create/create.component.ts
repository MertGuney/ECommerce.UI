import { FileUploadOptions } from './../../../../services/common/file-upload/file-upload.component';
import { AlertifyService, MessageType, Position } from './../../../../services/admin/alertify.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from './../../../../base/base.component';
import { Create_Product } from 'src/app/contracts/create_product';
import { ProductService } from './../../../../services/common/models/product.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService, private productService: ProductService, private alertift: AlertifyService) {
    super(spinner);
  }
  ngOnInit(): void {
  }
  @Output() createdProduct: EventEmitter<Create_Product> = new EventEmitter();
  @Output() fileUploadOptions: Partial<FileUploadOptions> = {
    action: "upload",
    controller: "products",
    explanation: "Select pictures",
    isAdminPage: true,
    accept:".png, .jgp, .jgep"
  };

  create(name: HTMLInputElement, stock: HTMLInputElement, price: HTMLInputElement) {
    this.showSpinner(SpinnerType.Ball);
    const create_product: Create_Product = new Create_Product();
    create_product.name = name.value;
    create_product.stock = parseInt(stock.value);
    create_product.price = parseFloat(price.value);

    this.productService.create(create_product, () => {
      this.hideSpinner(SpinnerType.Ball);
      this.alertift.message("Product added succesfully", {
        dismissOther: true,
        messageType: MessageType.Success,
        position: Position.TopRight
      });
      this.createdProduct.emit(create_product);
    }, errorMessage => {
      this.alertift.message(errorMessage, {
        dismissOther: true,
        messageType: MessageType.Error,
        position: Position.TopCenter
      });
    });
  }

}
