import { Product } from './../../../../shared/model/product';
import { ApiService } from './../../../../shared/service/api/api.service';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {
  validateForm!: FormGroup;

  formatterDollar = (value: number) => `$ ${value}`;
  parserDollar = (value: string) => value.replace('$ ', '');
  demoValue: number = 0;

  photoOne: File;
  photoTwo: File;
  photoTree: File;

  constructor(
    private fb: FormBuilder,
    private msg: NzMessageService,
    private api: ApiService,
    private notification: NzNotificationService
    ) { }

  submitForm(): void {
    let formData: any = new FormData();
    formData.append('name', this.validateForm.get('name').value)
    formData.append('type', this.validateForm.get('type').value)
    formData.append('category', this.validateForm.get('category').value)
    formData.append('description', this.validateForm.get('description').value)
    formData.append('price', this.validateForm.get('price').value)
    formData.append('subImage1', this.photoOne)
    formData.append('subImage2', this.photoTwo)
    formData.append('subImage3', this.photoTree)
    formData.append('rate', 5)
    formData.append('amount', this.validateForm.get('amount').value)
    formData.append('orders', 0)
    formData.append('color', this.validateForm.get('color').value)
    formData.append('size', this.validateForm.get('size').value)
    formData.append('mark', this.validateForm.get('mark').value)
    formData.append('featured', this.validateForm.get('featured').value)
    formData.append('newest', this.validateForm.get('newest').value)
    formData.append('fk_user_product', JSON.parse(localStorage.getItem('currentUser')).user_id)
       

    this.api.postProduct(formData).then(() => {     
      this.validateForm.reset();
      this.createNotification('success');
    },
      () => {
        this.createNotification('error');
      });;

  }

  handleChangeOne(info: NzUploadChangeParam): void {  
    this.photoOne = info.file.originFileObj;
  }

  handleChangeTwo(info: NzUploadChangeParam): void {    
    this.photoTwo = info.file.originFileObj
  }

  handleChangeThree(info: NzUploadChangeParam): void {    
    this.photoTree = info.file.originFileObj
  }

  createNotification(type: string): void {
    let title: string = 'Notificación';
    let content: string;
    if (type === 'success') {
      content = 'Producto agregado satisfactoriamente.';
    } else if(type === 'error') {
      content = 'Lo siento ha ocurrido un error, asegúrese de ser administrador para relizar esta acción.';
    }
    this.notification.create(
      type,
      title,
      content
    );
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      type: [null, [Validators.required]],
      category: [null, [Validators.required]],      
      description: [null, [Validators.required]],
      price: [0, [Validators.required]],     
      amount: [0, [Validators.required]],
      color: [null, [Validators.required]],
      size: [null, [Validators.required]],
      mark: [null, [Validators.required]],
      featured: [true, [Validators.required]],
      newest: [true, [Validators.required]]     
    });
  }
  

}
