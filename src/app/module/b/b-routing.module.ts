import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtComponent } from './components/art/art.component';
import { BComponent } from './b.component';
import { InfoComponent } from './components/info/info.component';

const routes: Routes = [
  {
    path: 'b',
    component: BComponent,
    children: [
      { path: 'art', component: ArtComponent },
      { path: 'info', component: InfoComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BRoutingModule {}
