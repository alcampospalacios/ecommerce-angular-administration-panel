import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductCreateRoutingModule } from './product-create-routing.module';
import { ProductCreateComponent } from './product-create.component';
import { DemoNgZorroAntdModule } from '../../../shared/ng-zorro-antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductCreateComponent],
  imports: [
    CommonModule,
    ProductCreateRoutingModule,
    DemoNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductCreateModule { }
