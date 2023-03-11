import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Product } from '../Models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url =environment.APIURL;
  constructor(private httpClient: HttpClient) { }
  
  private headers = {
    "headers": {
    'Authorization': 'Bearer '+ localStorage.getItem("token"),
    'Content-Type': 'application/json'
  }
  }

  getAllProducts(): Observable<IProduct>
  {
    return this.httpClient.get<IProduct>(`${this.url}/products`, this.headers)
  }

  getProductById(prdId:number): Observable<Product>
  {
    return this.httpClient.get<Product>(`${this.url}/products/${prdId}`, this.headers)
  }

  addProduct(newPrd:Product): Observable<Product>{
    return this.httpClient.post<Product>(`${this.url}/products/add`, newPrd, this.headers)
  }

  updateProduct(prdId:number, updatedProduct:Product){
    return this.httpClient.put<Product>(`${this.url}/products/${prdId}`, updatedProduct, this.headers)
  }

  deleteProduct(prdId:number){
    return this.httpClient.delete<Product>(`${this.url}/products/${prdId}`, this.headers)
  }

}
