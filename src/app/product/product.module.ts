import { NgModule } from '@angular/core';
import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-listings/product-listings.component';


const routes: Routes = [

    { path: 'products', component: ProductComponent,
      children: [
        { path: '', component: ProductListComponent},
        { path: 'detail/:productId', component: ProductDetailComponent},
      ]
    }
    

  ];

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: []
})
export class ProductModule { }
