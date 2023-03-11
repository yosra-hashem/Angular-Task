import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  product:Product;

  constructor(private prdService:ProductsService, private id:ActivatedRoute, private router:Router){
    this.product={} as Product;
  }
  ngOnInit() {

    this.prdService.getProductById(this.id.snapshot.params['id'])
    .subscribe(product=>{
      this.product=product;
      console.log(this.product);
    },
      error => {
        //alert("this product doesn't exist")
        this.router.navigate(["/product-not-found"])
    });
  }
}
