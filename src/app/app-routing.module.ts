import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OptionsComponent } from './work-order-options/Options.component';
import {WorkOrderComponent} from './work-order/work-order.component';


const routes: Routes = [
  {
    path: 'options',
    component: OptionsComponent,
  },
  {
    path: 'workorder/:id',
    component: WorkOrderComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
