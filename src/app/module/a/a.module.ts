import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ARoutingModule } from './a-routing.module';
import { AComponent } from './a.component';
import { ProfileComponent } from './components/profile/profile.component';
import { OrderComponent } from './components/order/order.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AServiceService } from './a-service.service';

@NgModule({
  declarations: [AComponent, ProfileComponent, OrderComponent],
  imports: [CommonModule, ARoutingModule, NzButtonModule],
  providers: [AServiceService],
})
export class AModule {}
