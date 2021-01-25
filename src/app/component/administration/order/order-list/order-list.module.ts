import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderListRoutingModule } from './order-list-routing.module';
import { OrderListComponent } from './order-list.component';
import { DemoNgZorroAntdModule } from '../../../shared/ng-zorro-antd.module';

@NgModule({
  declarations: [OrderListComponent],
  imports: [
    CommonModule,
    OrderListRoutingModule,
    DemoNgZorroAntdModule
  ]
})
export class OrderListModule { }
