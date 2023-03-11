import { Component, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';
import { IProduct } from 'src/app/Models/iproduct';


@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit{
  prdList: IProduct;
  limit: number
  
  constructor(private prdService:ProductsService){
    this.prdList = {} as IProduct;
    this.limit = 6
  }
  ngOnInit() {
    this.prdService.getAllProducts()
    .subscribe(products=>{
      this.prdList=products;
      console.log(this.prdList);
    });
  }
}
