import { Order } from './../../model/order';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Product } from '../../model/product'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_URL = 'http://localhost:8000/api';
  user = JSON.parse(localStorage.getItem('currentUser'));

  constructor(private http: HttpClient) { }

  // Product request methods
  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.API_URL}/product/`);
  }

  getProductDetail(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.API_URL}/product/${id}/`);
  }

  postProduct(formData: FormData): Promise<any> {
    let token = JSON.parse(localStorage.getItem('currentUser')).token;

    let headers = new HttpHeaders({
      'Authorization': 'token ' + token
    });

    let promise = new Promise<void>((resolve, reject) => {
      this.http.post<Product>(`${this.API_URL}/product/`, formData, { headers: headers }).subscribe(() => {
        resolve();
      }, err => {
        reject();
      });
    });

    return promise;
  }

  patchProduct(formData: FormData, url) {
    let token = JSON.parse(localStorage.getItem('currentUser')).token;

    let headers = new HttpHeaders({
      'Authorization': 'token ' + token
    });

    this.http.patch<Product>(`${url}`, formData, { headers: headers }).subscribe(response => {
      console.log(response);
    });
  }

  deleteProduct(id: number): Promise<any> {
    let token = JSON.parse(localStorage.getItem('currentUser')).token;

    let headers = new HttpHeaders({
      'Authorization': 'token ' + token
    });

    let promise = new Promise<void>((resolve, reject) => {
      this.http.delete<Product>(`${this.API_URL}/product/${id}/`, { headers: headers }).subscribe(() => {
        resolve();
      }, err => {
        reject();
      });
    });

    return promise;

  }

  // Order request methods
  getOrderList(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.API_URL}/order/`);
  }

}
