import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service'; 

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  prdList: IProduct;
  currentPage: number;
  itemsPerPage:number;

  constructor(private prdService:ProductsService){
    this.prdList= {} as IProduct;
    this.currentPage=1;
    this.itemsPerPage=6;
  }
  ngOnInit() {
    this.prdService.getAllProducts()
    .subscribe(products=>{
      this.prdList=products;
      console.log(this.prdList);
    });
  }
}
