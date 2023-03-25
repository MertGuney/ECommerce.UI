import { DialogModule } from './../../../dialogs/dialog.module';
import { FileUploadModule } from './../../../services/common/file-upload/file-upload.module';
import { DeleteDirective } from './../../../directives/admin/delete.directive';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteDialogComponent } from 'src/app/dialogs/delete-dialog/delete-dialog.component';

@NgModule({
  declarations: [
    ProductsComponent,
    CreateComponent,
    ListComponent,
    DeleteDirective
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatTableModule,
    MatDialogModule,
    MatButtonModule,
    MatSidenavModule,
    MatPaginatorModule,
    FileUploadModule,
    DialogModule,
    RouterModule.forChild([
      { path: "", component: ProductsComponent }
    ])
  ]
})
export class ProductsModule { }
