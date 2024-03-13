import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, delay } from 'rxjs';




@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private STORE_ID = new BehaviorSubject<string>('');
  public STORE_ID$ = this.STORE_ID.asObservable();
  setStoreId(data: string) {
    this.STORE_ID.next(data);
  }

  private baseUrl = environment.url_api_onlineshop;

  constructor(private http: HttpClient) {}

  getStores() {
    //GET ​/stores
    const url = `${this.baseUrl}/stores`;
    console.log(url);
    return this.http.get<any[]>(url);
  }
  getStoreData(idStore: string) {
    //GET ​/stores​/{idStore}
    const url = `${this.baseUrl}/stores/${idStore}`;
    console.log(url);
    return this.http.get<any>(url);
  }
  getStoreProducts(idStore: string) {
    //GET ​/stores​/{idStore}​/products
    const url = `${this.baseUrl}/stores/${idStore}/products`;
    console.log(url);
    return this.http.get<any[]>(url);
  }
  getStoreProductsPagging(idStore: string, page: number, elements: number) {
    //GET ​/stores​/{idStore}​/products
    const url = `${this.baseUrl}/stores/${idStore}/products?page=${page}&elements=${elements}`;
    console.log(url);
    return this.http.get<any>(url);
  }
  addStoreProducts(idStore: string, product: any) {
    //POST ​/stores​/{idStore}​/products
    const url = `${this.baseUrl}/stores/${idStore}/products`;
    console.log(url);
      var headers = new HttpHeaders()
        .set('Content-Type', 'application/json')
        .append('accept','application/json');


    return this.http.post<any>(url, product, {
      headers,
      responseType: 'text' as 'json',
    });
  }
  getProductData(idStore: string, idProduct: string) {
    //GET ​/stores​/{idStore}​/products​/{idProduct}
    const url = `${this.baseUrl}/stores/${idStore}/products/${idProduct}`;
    console.log(url);
    return this.http.get<any[]>(url);
  }
  deleteStoreProduct(idStore: string, idProduct: string) {
    //DELETE ​/stores​/{idStore}​/products​/{idProduct}
    const url = `${this.baseUrl}/stores/${idStore}/products/${idProduct}`;
    console.log(url);
    return this.http.delete<any[]>(url);
  }
  getProductStatsData(idStore: string) {
    // GET ​/stores​/{idStore}​/stats​/categories
    const url = `${this.baseUrl}/stores/${idStore}/stats/categories`;
    console.log(url);
    return this.http.get<any[]>(url);
  }
}
