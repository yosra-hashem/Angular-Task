import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductListComponent } from './Components/Product/product-list/product-list.component';
import { CardViewComponent } from './Components/card-view/card-view.component';
import { HttpClientModule } from '@angular/common/http';
import { CardContainerComponent } from './Components/card-container/card-container.component';
import { ProductDetailsComponent } from './Components/Product/product-details/product-details.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { LoginPageComponent } from './Components/login-page/login-page.component'; // <-- import the module
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from "./Services/login.service";
import { ProductNotFoundComponent } from './Components/Product/product-not-found/product-not-found.component';
import { AddAndEditComponent } from './Components/add-and-edit/add-and-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ProductListComponent,
    CardViewComponent,
    CardContainerComponent,
    ProductDetailsComponent,
    NotFoundComponent,
    LoginPageComponent,
    ProductNotFoundComponent,
    AddAndEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
