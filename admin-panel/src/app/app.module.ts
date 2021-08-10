import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { ListComponent } from './list/list.component';
import { CategoryComponent } from './category/category.component';
// import { AuthInterceptor } from './auth-interceptor'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    ProductsComponent,
    ListComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  // providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
