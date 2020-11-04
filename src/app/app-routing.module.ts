import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {routers} from './routers'

const routes: Routes = [
  ...routers,
  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
  },
  {
    path:'m',
    loadChildren:'./module/a/a.module#AModule'
  },
  {
    path:'m',
    loadChildren:'./module/b/b.module#BModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
