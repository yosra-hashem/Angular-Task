import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Models/product';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-add-and-edit',
  templateUrl: './add-and-edit.component.html',
  styleUrls: ['./add-and-edit.component.css']
})
export class AddAndEditComponent implements OnInit{
  isEditing: Boolean
  product: Product
  productForm: FormGroup;

  constructor(private fb: FormBuilder,private id:ActivatedRoute, private productservice: ProductsService, private router: Router) {
    if (this.router.url.startsWith("/edit")) {
      this.isEditing = true
    } else {
      this.isEditing = false
    }
    this.product = {} as Product
    this.productForm = this.fb.group({
      title: ["", [Validators.required]],
      description: ["", [Validators.required]],
      price: ["", [Validators.required]],
      discountPercentage: ["", [Validators.required]],
      rating: ["", [Validators.required]],
      stock: ["", [Validators.required]],
      brand: ["", [Validators.required]],
      category: ["", [Validators.required]],
      thumbnail: ["", [Validators.required]],
      images: fb.array([this.fb.control('')]),
    })
  }

  get title(){
    return this.productForm.get("title");
  }

  get description(){
    return this.productForm.get("title");
  }
  get price(){
    return this.productForm.get("price");
  }
  get discountPercentage(){
    return this.productForm.get("discountPercentage");
  }
  get rating(){
    return this.productForm.get("rating");
  }
  get stock(){
    return this.productForm.get("stock");
  }
  get brand(){
    return this.productForm.get("brand");
  }
  get category(){
    return this.productForm.get("category");
  }

  get thumbnail(){
    return this.productForm.get("thumbnail");
  }

  get images(){
    return this.productForm.get("images") as FormArray;
  }

  

  ngOnInit() {
    if (this.isEditing) {
      this.productservice.getProductById(this.id.snapshot.params['id']).subscribe(product=>{
        this.product=product;
        this.productForm = this.fb.group({
          title: [product.title, [Validators.required]],
          description: [product.description, [Validators.required]],
          price: [product.price, [Validators.required]],
          discountPercentage: [product.discountPercentage, [Validators.required]],
          rating: [product.rating, [Validators.required]],
          stock: [product.stock, [Validators.required]],
          brand: [product.brand, [Validators.required]],
          category: [product.category, [Validators.required]],
          thumbnail: [product.thumbnail, [Validators.required]],
          images: this.fb.array(product.images.map(image => this.fb.control(image)))
        })
    },
      error => {
        //alert("this product doesn't exist")
        this.router.navigate(["/product-not-found"])
    });
    }
  }

  addImage(event: any) {
    this.images.push(this.fb.control(''));
    event.target?.classList.add('d-none');
  }

  submit() {
    if (this.isEditing) {
      this.productservice.updateProduct(this.product.id, this.productForm.value).subscribe(product => {
        alert(`success, updated object id is ${product.id}`)
        console.log(product)
        this.router.navigate(["/products"])
      },
        error => {
        alert(`failed, ${error}`)
      })
    }
     else {
      this.productservice.addProduct(this.productForm.value).subscribe(product => {
        alert(`success, updated object id is ${product.id}`)
        console.log(product)
        this.router.navigate(["/products"])
      },
        error => {
        alert(`failed, ${error}`)
      })
    }
  }
}
