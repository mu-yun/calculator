import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PriceSumComponent } from './price-sum/price-sum.component';


const routes: Routes = [
  {

    path: '',
    redirectTo: 'price-sum',
    pathMatch: 'full'
  },
  {
    path: 'price-sum',
    component:PriceSumComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
