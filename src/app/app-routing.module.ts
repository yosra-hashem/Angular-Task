import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAndEditComponent } from './Components/add-and-edit/add-and-edit.component';
import { HomeComponent } from './Components/home/home.component'
import { LoginPageComponent } from './Components/login-page/login-page.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { ProductDetailsComponent } from './Components/Product/product-details/product-details.component';
import { ProductListComponent } from './Components/Product/product-list/product-list.component';
import { ProductNotFoundComponent } from './Components/Product/product-not-found/product-not-found.component';
import { AuthGuard } from './Guards/auth.guard';
import { LoggedGuard } from './Guards/logged.guard';

const routes: Routes = [
  {path: 'login', component: LoginPageComponent, canActivate:[LoggedGuard]},
  {path:"home", component: HomeComponent, canActivate:[AuthGuard]},
  {path:"products", component: ProductListComponent, canActivate:[AuthGuard]},
  {path:"products/:id", component: ProductDetailsComponent, canActivate:[AuthGuard]},
  { path: "product-not-found", component: ProductNotFoundComponent, canActivate: [AuthGuard] },
  {path:"edit/:id", component: AddAndEditComponent, canActivate:[AuthGuard]},
  {path: "add", component: AddAndEditComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
