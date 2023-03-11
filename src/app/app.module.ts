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
import {NgxPaginationModule} from 'ngx-pagination';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { LoginPageComponent } from './Components/login-page/login-page.component'; // <-- import the module


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
