import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import {ProductsComponent} from './products/products.component'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { AuthGuard } from './authGuard/auth.guard';
import {ListComponent} from './list/list.component';
import {CategoryComponent} from './category/category.component'

const routes: Routes = [
{path:'login', component:LoginComponent},
{path:'register', component:RegisterComponent},
{path:'products',component:ProductsComponent},
{path:'contact',component:ContactComponent},
{path:'list',component:ListComponent},
{path:'category',component:CategoryComponent},




  // {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  // {path:'list',component:ListComponent, canActivate:[AuthGuard]},
  // {path:'view',component:ViewUserComponent, canActivate:[AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
