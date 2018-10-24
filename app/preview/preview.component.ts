import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../shared/product-service.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  finalProducts:any;
  constructor(private _productService:ProductServiceService) { }

  ngOnInit() {
    this._productService.getProducts().subscribe(data=>{
      this.finalProducts=data})
}
}
