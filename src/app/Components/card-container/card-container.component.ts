import { Component, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { IProduct } from 'src/app/Models/iproduct';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit{
  prdList: IProduct;
  limit: number
  
  constructor(private prdService:ProductsService, private router:Router){
    this.prdList = {} as IProduct;
    this.limit = 6
  }
  ngOnInit() {
    this.prdService.getAllProducts()
    .subscribe(products=>{
      this.prdList=products;
      console.log(this.prdList);
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
