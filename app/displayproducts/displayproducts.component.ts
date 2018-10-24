import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Http,Response,Headers} from '@angular/http';

import {ProductServiceService} from '../shared/product-service.service';

@Component({
  selector: 'displayproducts',
  templateUrl: './displayproducts.component.html',
  styleUrls: ['./displayproducts.component.css']
})
export class DisplayproductsComponent implements OnInit {
  products:any;
  constructor(private _http:Http,private _productService:ProductServiceService) { }
  fetchData(){
      this._productService.getProducts().subscribe(data=>{
        this.products=data})
  }
  private header=new Headers({'Content-Type': 'application/json'});
  deleteProduct=function(id:number){
    if(confirm("Are you sure?")) {
      const url= "http://localhost:3000/products/"+(id);
      return this._http.delete(url,{headers:this.headers}).toPromise()
      .then(()=>{
        this.fetchData();
       
      }) 
    }
  }
  ngOnInit() {
   this.fetchData();
  }

}
