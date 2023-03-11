import { Component, OnChanges, OnInit , Input} from '@angular/core';
import { Product } from 'src/app/Models/product';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnChanges, OnInit{
  @Input() product: Product;
  
  constructor(){
    this.product = {} as Product
  }
  

  ngOnChanges():void
  {
    
  }

  ngOnInit(){
    
  }
}
