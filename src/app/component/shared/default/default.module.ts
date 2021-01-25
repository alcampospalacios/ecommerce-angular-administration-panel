import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import { DemoNgZorroAntdModule } from '../ng-zorro-antd.module';
import { DefaultComponent } from './default.component';

@NgModule({
  declarations: [DefaultComponent],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    DemoNgZorroAntdModule
  ]
})
export class DefaultModule { }
