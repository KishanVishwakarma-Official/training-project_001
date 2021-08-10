import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 regform:FormGroup;
  constructor(public authservice:ServicesService) { }

  ngOnInit(): void {
    this.regform=new FormGroup({
     
      'name': new FormControl('',Validators.required),
      'email': new FormControl('',[Validators.required, Validators.email]),
      'password': new FormControl('',Validators.required),
  
    })
  }
  onSignup(){
    if(this.regform.invalid){
      return;
    }
  this.authservice.createUser(this.regform.value);
  }
}





