import { Component, OnInit } from '@angular/core';
import {authProduct} from '../model/authProduct';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

 data:any = []
  constructor(private product:ServicesService){

   

  }
  ngOnInit(): void{
  this.getList();

  }

  getList()
  {
    this.product.getProducts().subscribe(data =>{
    
     this.data = data;  

    }) 
  }

  onDelete(id:string){
    if(confirm('Do you Want to delete this contact')){
      this.product.DeleteProduct(id).subscribe(
        (res)=>{
          this.getList();
        },
        (err)=>{
          console.log(err);
        }
      )
    }
  }
}