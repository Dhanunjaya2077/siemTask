import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {ActivatedRoute,Router} from '@angular/router';
import {FormControl,FormGroup} from '@angular/forms';
import {ProductServiceService} from '../shared/product-service.service';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  id:number;
  products:any;
  productObj:object={};
  updateData=new FormGroup({
    productId:new FormControl(),
    productName:new FormControl(),
    productPrice:new FormControl()
  })

  constructor(private http:HttpClient,private _productService:ProductServiceService,private router:Router, private activateroute:ActivatedRoute) { }

  ngOnInit() {
    this.activateroute.paramMap.subscribe(params => {
      this.id = +params.get('id');
      this.editProduct(this.id);
    });
  }
  editProduct(id){
    if(id===0){
      this.productObj={
        "productId":null,
        "productName":null,
        "productPrice":null,
      }
    }
    else{
      this._productService.editProduct(id).subscribe(data=>{
        this.products=data;
      })

    }
  }
  updateProduct(updatedData){
    this.productObj={
      productId:updatedData.productId,
      productName:updatedData.productName,
      productPrice:updatedData.productPrice,
    }
    const url= "http://localhost:3000/products/"+(this.id);
    this.http.put(url, this.productObj).subscribe(data=>{
      this.products=data;
    })
    this.router.navigate(['/displayProducts']);
    window.location.reload();
    console.log(this.productObj);

  }

}
