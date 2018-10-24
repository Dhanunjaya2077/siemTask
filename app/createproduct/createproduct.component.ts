import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms';
import {Response,Headers,RequestOptions} from '@angular/http';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {

  formData=new FormGroup({
    productId:new FormControl(),
    productName:new FormControl(),
    productPrice:new FormControl()
  })
  productObj={};
  ProductAddedStatus="New Product has been added";
  isAdded:boolean=false;
 url="http://localhost:3000/products";

  constructor(private _http:HttpClient,private _router:Router) {}
  ngOnInit() {
  }
  createProduct(formData){
    this.productObj={
      "productId":formData.productId,
      "productName":formData.productName,
      "productPrice":formData.productPrice,
    }
    this._http.post('http://localhost:3000/products',this.productObj).subscribe(
      (res:Response)=>res);
      this.isAdded=true;
      this._router.navigate(['displayProducts']);
      window.location.reload();
}
}
