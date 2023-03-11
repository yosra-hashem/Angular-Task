import { Component, OnChanges, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnChanges, OnInit{

  
  @Input() product: Product;
  @Output() deleteEvent = new EventEmitter<number>();
  
  constructor(private productservice: ProductsService, private router:Router){
    this.product = {} as Product
  }
  

  ngOnChanges():void
  {
    
  }

  ngOnInit(){
    
  }

  delete(productId: number) {
    this.productservice.deleteProduct(productId).subscribe(product => {
      alert(`success product with id ${product.id} was delete`)
      this.deleteEvent.emit(productId);
    },
      error => {
        alert("an error has occured, please try to relogin and refresh page")
        alert(error)
        // localStorage.clear()
        // this.router.navigate(["/login"])
    })
  }

  goToDetails(productId: number){
    this.router.navigate([`/products/${productId}`])
  }
  
}
