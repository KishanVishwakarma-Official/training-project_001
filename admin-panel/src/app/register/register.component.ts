import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 adminform:FormGroup;
  constructor(public authservice:ServicesService) { }

  ngOnInit(): void {
    this.adminform=new FormGroup({
      'id': new FormControl(''),
      'name': new FormControl('',Validators.required),
      'email': new FormControl('',[Validators.required, Validators.email]),
      'password': new FormControl('',Validators.required),
      // 'confirmpass': new FormControl('',Validators.required)
    })
  }
  onSignup(){
    if(this.adminform.invalid){
      return;
    }
  this.authservice.createUser(this.adminform.value);
  }
}





