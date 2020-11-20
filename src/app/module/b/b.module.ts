import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BRoutingModule } from './b-routing.module';
import { BComponent } from './b.component';
import { ArtComponent } from './components/art/art.component';
import { InfoComponent } from './components/info/info.component';
import { BServiceService } from './b-service.service';

@NgModule({
  declarations: [BComponent, ArtComponent, InfoComponent],
  imports: [CommonModule, BRoutingModule],
  providers: [BServiceService],
})
export class BModule {}
