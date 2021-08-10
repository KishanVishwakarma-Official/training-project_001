import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  catList:any = [];
  constructor( public service :ServicesService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(){
    this.service.getCategory().subscribe(data =>{
     
     this.catList = data;  

    }) 
  }
}
