import { Product } from './../../../../shared/model/product';
import { ApiService } from './../../../../shared/service/api/api.service';
import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
  searchValue = '';
  visible = false;
  listOfData: Product[];
  listOfDisplayData;

  reset(): void {
    this.searchValue = '';
    this.search();
  }

  search(): void {
    this.visible = false;
    this.listOfDisplayData = this.listOfData.filter((item: Product) => item.name.indexOf(this.searchValue) !== -1);
  }

  constructor(private apiService: ApiService, private notification: NzNotificationService) { }

  ngOnInit(): void {
    this.apiService.getProductList().subscribe(data => {
      console.log(data);
      this.listOfData = data;
      this.listOfDisplayData = [...this.listOfData];
    });
  }

  console(data: any) {
    console.log('dataTable: ', data);
  }

  deleteRow(id: number) {    
    this.apiService.deleteProduct(id).then(() => {
      this.listOfData = this.listOfData.filter(item => item.id !== id);
      console.log('filter: ', this.listOfData.filter(d => d.id !== id)); 
      this.createNotification('success');
    },
      () => {
        this.createNotification('error');
      });
  }    
  

  createNotification(type: string): void {
    let title: string = 'Notificación';
    let content: string;
    if (type === 'success') {
      content = 'El producto ha sido eliminado satisfactoriamente.';
    } else if(type === 'error') {
      content = 'Lo siento ha ocurrido un error, asegúrese de ser administrador para eliminar un elemento.';
    }
    this.notification.create(
      type,
      title,
      content
    );
  }

}
