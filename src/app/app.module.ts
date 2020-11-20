import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US, zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import zh from '@angular/common/locales/zh';

// 导入UI组件
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzSpinModule } from 'ng-zorro-antd/spin';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MarketComponent } from './components/market/market.component';
import { BusinessListComponent } from './components/business-list/business-list.component';
import { BussinessCodeListComponent } from './components/bussiness-code-list/bussiness-code-list.component';
import { ClusterListComponent } from './components/cluster-list/cluster-list.component';
import { LinkArchitectureComponent } from './components/link-architecture/link-architecture.component';
import { SingleTrackingComponent } from './components/single-tracking/single-tracking.component';
import { UserJourneyMapComponent } from './components/user-journey-map/user-journey-map.component';
import { MonitoringAlarmComponent } from './components/monitoring-alarm/monitoring-alarm.component';
import { UserMonitoringComponent } from './components/user-monitoring/user-monitoring.component';
import { ApplicationWallComponent } from './components/application-wall/application-wall.component';
import { MonitoringScreenComponent } from './components/monitoring-screen/monitoring-screen.component';
import { DistributedLinkComponent } from './components/distributed-link/distributed-link.component';
import { ConfigInformationComponent } from './components/config-information/config-information.component';
import { THeaderComponent } from './components/t-header/t-header.component';
import { TSiderComponent } from './components/t-sider/t-sider.component';
import { JourneyTabsTableComponent } from './components/user-journey-map/components/journey-tabs-table/journey-tabs-table.component';
import { ConsumingTimeComponent } from './common/consuming-time/consuming-time.component';
import { JourneyContainerComponent } from './components/user-journey-map/components/journey-container/journey-container.component';

registerLocaleData(zh);

// 引入服务
import { HttpService } from './service/http.service';
import { DateFormatPipe } from './pipe/date-format.pipe';
import { CommonInterceptor } from './service/httpInterceptor';

// 引入a b 模块
import { AModule } from './module/a/a.module';
import { BModule } from './module/b/b.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MarketComponent,
    BusinessListComponent,
    BussinessCodeListComponent,
    ClusterListComponent,
    LinkArchitectureComponent,
    SingleTrackingComponent,
    UserJourneyMapComponent,
    MonitoringAlarmComponent,
    UserMonitoringComponent,
    ApplicationWallComponent,
    MonitoringScreenComponent,
    DistributedLinkComponent,
    ConfigInformationComponent,
    JourneyTabsTableComponent,
    THeaderComponent,
    TSiderComponent,
    DateFormatPipe,
    ConsumingTimeComponent,
    ConsumingTimeComponent,
    JourneyContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzLayoutModule,
    NzIconModule,
    NzGridModule,
    NzMenuModule,
    NzDatePickerModule,
    NzInputModule,
    NzTableModule,
    NzPaginationModule,
    NzSelectModule,
    NzTabsModule,
    NzCardModule,
    NzSpinModule,
    AModule,
    BModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    HttpService,
    { provide: HTTP_INTERCEPTORS, useClass: CommonInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
// { provide: HTTP_INTERCEPTORS, useClass: CommonInterceptor, multi: true }
