import { ProductUpdateComponent } from './component/administration/product/product-update/product-update.component';
import { ProductCreateComponent } from './component/administration/product/product-create/product-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './shared/guard/auth.guard';
import { LoginComponent } from './component/shared/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { ProductListComponent } from './component/administration/product/product-list/product-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'login', loadChildren: () => import('./component/shared/login/login.module').then(m => m.LoginModule) },

  {
    path: 'home', component: HomeComponent, children: [
      { path: 'productList', loadChildren: () => import('./component/administration/product/product-list/product-list.module').then(m => m.ProductListModule)},
      { path: 'productCreate', loadChildren: () => import('./component/administration/product/product-create/product-create.module').then(m => m.ProductCreateModule)},
      { path: 'productUpdate/:id', loadChildren: () => import('./component/administration/product/product-update/product-update.module').then(m => m.ProductUpdateModule)},
      { path: 'orderList', loadChildren: () => import('./component/administration/order/order-list/order-list.module').then(m => m.OrderListModule)},
    ], canActivate: [AuthGuard]
  },

  { path: '**', redirectTo: 'default' },
  { path: 'default', loadChildren: () => import('./component/shared/default/default.module').then(m => m.DefaultModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
