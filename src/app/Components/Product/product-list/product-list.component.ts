import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  itemsPerPage: number;

  constructor(private prdService:ProductsService, private router:Router){
    this.prdList= {} as IProduct;
    this.currentPage=1;
    this.itemsPerPage=6;
  }

  ngOnInit() {
    this.prdService.getAllProducts()
    .subscribe(products=>{
      this.prdList=products;
    },
      error => {
        alert("an error has occured, please try to relogin and refresh page")
        localStorage.clear()
        this.router.navigate(["/login"])
    });
  }

  deleteFromList(productId: number) {
    let products = this.prdList.products
    products = products.filter(product => {
      return product.id != productId
    })
    this.prdList.products = products
  }

}
