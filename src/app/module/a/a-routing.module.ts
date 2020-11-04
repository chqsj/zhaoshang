import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './components/order/order.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AComponent } from './a.component';

const routes: Routes = [
  {
    path: 'a',
    component: AComponent,
    children: [
      { path: 'order', component: OrderComponent },
      { path: 'profile', component: ProfileComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ARoutingModule {}
