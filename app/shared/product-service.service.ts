import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

constructor(private _http:HttpClient) {}
url="http://localhost:3000/products/";

getProducts(){
  return this._http.get(this.url)
}
editProduct(id:number){
  return this._http.get(this.url + id)
}
}
