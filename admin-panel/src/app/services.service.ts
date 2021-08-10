import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import {LoginData} from './model/login.model';
import {AuthData} from './model/auth.model';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {



  constructor( public http: HttpClient, private router:Router) { }

// products   
getProducts()
{ 
  return this.http.get("http://localhost:5000/product/list");
}
DeleteProduct(id:string){
  return this.http.delete("http://localhost:5000/product/delete/"+id);

}
// category

getCategory()
{
  return this.http.get("http://localhost:5000/category/list");
}

// admin 

getAdmin()
{
  return this.http.get("http://localhost:5000/admin/list");
}


///////////////




private token :any ;
userName:string="";
private isAuthenticated=false;
getToken(){
  return this.token;
}
getIsAuth(){
  return this.isAuthenticated;
}

private subject =new Subject<boolean>();

getMessage(){
  return this.subject.asObservable();
}
//create admin
createUser(users:AuthData) {
  this.http.post<{token:string}>("http://localhost:5000/admin/add", users)
  .subscribe(res=>{
    console.log(res)
    const token=res.token;
    this.token=token;
    if(token){
     // this.isAuthenticated=true;
     // this.subject.next(true);
      this.isAuthenticated=false;
      this.subject.next(false);
      // this.saveAuthData(token)
      this.router.navigate(['/login'])
    }
   alert("login to continue")
  }) 

}

// login admin
login(loginData:LoginData) {
  
  this.http.post<{token:string}>("http://localhost:5000/admin/login",loginData)
  .subscribe(response=>{
    console.log(response)
    const token=response.token;

    this.token=token;
    if(token){
      this.isAuthenticated=true;
      this.subject.next(true);
      // this.saveAuthData(token)
      this.router.navigate(['/list'])
    }
  });
}



















// logout(){
//   this.token = null;
//   this.subject.next(false);         //user not authenticated
//   this.clearAuthData();
//   this.router.navigate(['/login'])
// }

// private saveAuthData(token: string){
//   localStorage.setItem('token',token);
// }

// private clearAuthData(){
//   localStorage.removeItem('token')
// }

// private getAuthData(){
//   const token= localStorage.getItem('token');
//   if(!token){
//     return;
//   }
//   return token;
// }

// autoAuthUser(){
//   const authInformation=this.getAuthData();
//   this.token = authInformation;
//   if(this.token){
//     this.isAuthenticated=true;
//     this.subject.next(true);
//   }

// }

 
}



 



