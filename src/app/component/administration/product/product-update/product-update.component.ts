import { Component, Input, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { ApiService } from 'src/app/shared/service/api/api.service';
import { Product } from '../../../../shared/model/product';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent implements OnInit {
  product: Product;
  validateForm!: FormGroup;

  formatterDollar = (value: number) => `$ ${value}`;
  parserDollar = (value: string) => value.replace('$ ', '');
  demoValue: number = 0;

  photoOne: File;
  photoTwo: File;
  photoTree: File;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  submitForm(): void {
    let formData: any = new FormData();
    formData.append('name', this.validateForm.get('name').value)
    formData.append('type', this.validateForm.get('type').value)
    formData.append('category', this.validateForm.get('category').value)
    formData.append('description', this.validateForm.get('description').value)
    formData.append('price', this.validateForm.get('price').value)    
    formData.append('rate', 5)
    formData.append('amount', this.validateForm.get('amount').value)
    formData.append('color', this.validateForm.get('color').value)
    formData.append('size', this.validateForm.get('size').value)
    formData.append('mark', this.validateForm.get('mark').value)
    formData.append('featured', this.validateForm.get('featured').value)
    formData.append('newest', this.validateForm.get('newest').value)

    this.api.patchProduct(formData, this.product.url);
  }  

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.api.getProductDetail(id)
      .subscribe((prod: Product) => {
        this.product = prod;        
        this.validateForm = this.fb.group({
          name: [prod.name, [Validators.required]],
          type: [prod.type, [Validators.required]],
          category: [prod.category, [Validators.required]],
          description: [prod.description, [Validators.required]],
          price: [prod.price, [Validators.required]],
          amount: [prod.amount, [Validators.required]],
          color: [prod.color, [Validators.required]],
          size: [prod.size, [Validators.required]],
          mark: [prod.mark, [Validators.required]],
          featured: [prod.featured, [Validators.required]],
          newest: [prod.newest, [Validators.required]]
        });
      });

   
  }

}
