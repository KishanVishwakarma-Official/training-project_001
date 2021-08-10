import { Component, OnInit } from '@angular/core';
import {authProduct} from '../model/authProduct';
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {
  data:any = []
  constructor(private admin:ServicesService) { }

  ngOnInit(): void {
    this.getList();
  }
  getList(){
    this.admin.getAdmin().subscribe(data =>{
    
      this.data = data;  
 
     }) 
  }


}
