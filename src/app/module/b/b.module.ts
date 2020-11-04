import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BRoutingModule } from './b-routing.module';
import { BComponent } from './b.component';
import { ArtComponent } from './components/art/art.component';
import { InfoComponent } from './components/info/info.component';


@NgModule({
  declarations: [BComponent, ArtComponent, InfoComponent],
  imports: [
    CommonModule,
    BRoutingModule
  ]
})
export class BModule { }
