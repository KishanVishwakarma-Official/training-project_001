
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup;
  constructor(public authService:ServicesService) { }
  ngOnInit(): void {
    this.loginform=new FormGroup({
      'email': new FormControl('',[Validators.required, Validators.email]),
      'password': new FormControl('',Validators.required)
    })
  }

  onLogin(){
    if(this.loginform.invalid){
      return;
    }
    console.log(this.loginform.value);
    
    this.authService.login(this.loginform.value)
  }

}
