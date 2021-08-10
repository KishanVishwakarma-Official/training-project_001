// import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { ServicesService } from "./services.service";
// @Injectable()
// export class AuthInterceptor implements HttpInterceptor{
//   constructor(private authServices:ServicesService){}
//   intercept(req: HttpRequest<any>,next:HttpHandler){
//     const authToken=this.authServices.getToken();
//     const authRequest= req.clone({
//       headers:req.headers.set("Authorization","Bearer "+authToken)
//     });
//     return next.handle(authRequest);
//   }
// }
