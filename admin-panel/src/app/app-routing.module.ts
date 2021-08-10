import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ProductsComponent} from './products/products.component'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AdminsComponent} from './admins/admins.component'

import {CategoryComponent} from './category/category.component'

const routes: Routes = [
{path:'login', component:LoginComponent},
{path:'register', component:RegisterComponent},
{path:'products',component:ProductsComponent},
{path:'category',component:CategoryComponent},
{path:'admins',component:AdminsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
