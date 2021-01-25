import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/service/api/api.service';

import { Order } from './../../../../shared/model/order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit { 
  orders: Order[];  

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getOrderList().subscribe((data: Order[]) => {
      this.orders = data;
    });
  }

  

}
