import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './Components/home/home.component'
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductDetailsComponent } from './Components/Product/product-details/product-details.component';
import { ProductListComponent } from './Components/Product/product-list/product-list.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"products", component: ProductListComponent},
  {path:"products/:id", component: ProductDetailsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
