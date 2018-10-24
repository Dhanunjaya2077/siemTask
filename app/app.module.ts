import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';



import { AppComponent } from './app.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { PreviewComponent } from './preview/preview.component';
import { DisplayproductsComponent } from './displayproducts/displayproducts.component';

const routes:Routes=[
  {path:'displayProducts',component:DisplayproductsComponent},
  {path:'create',component:CreateproductComponent},
  {path:'preview',component:PreviewComponent},
  {path:'update/:id',component:UpdateproductComponent},
  {path:'',redirectTo:'/create', pathMatch:'full'}
]
@NgModule({
  declarations: [
    AppComponent,
    CreateproductComponent,
    UpdateproductComponent,
    PreviewComponent,
    DisplayproductsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
