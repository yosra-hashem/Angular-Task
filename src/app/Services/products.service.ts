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
  constructor(private httpClient:HttpClient) { }

  getAllProducts(): Observable<IProduct>
  {
    return this.httpClient.get<IProduct>(`${this.url}/products`)
  }

  getProductById(prdId:number): Observable<Product>
  {
    return this.httpClient.get<Product>(`${this.url}/products/${prdId}`)
  }

  addProduct(newPrd:IProduct){

  }

  updateProduct(prdId:number, updatedProduct:IProduct){

  }

  deleteProduct(prdId:number){

  }

}
