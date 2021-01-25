import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductUpdateRoutingModule } from './product-update-routing.module';
import { ProductUpdateComponent } from './product-update.component';
import { DemoNgZorroAntdModule } from '../../../shared/ng-zorro-antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductUpdateComponent],
  imports: [
    CommonModule,
    ProductUpdateRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductUpdateModule { }
