import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { MarketComponent } from "./components/market/market.component";
import { BusinessListComponent } from "./components/business-list/business-list.component";
import { BussinessCodeListComponent } from './components/bussiness-code-list/bussiness-code-list.component'
import { ClusterListComponent } from "./components/cluster-list/cluster-list.component";
import { LinkArchitectureComponent } from "./components/link-architecture/link-architecture.component";
import { SingleTrackingComponent } from "./components/single-tracking/single-tracking.component";
import { UserJourneyMapComponent } from "./components/user-journey-map/user-journey-map.component";
import { MonitoringAlarmComponent } from "./components/monitoring-alarm/monitoring-alarm.component";
import { UserMonitoringComponent } from "./components/user-monitoring/user-monitoring.component";
import { ApplicationWallComponent } from "./components/application-wall/application-wall.component";
import { MonitoringScreenComponent } from "./components/monitoring-screen/monitoring-screen.component";
import { DistributedLinkComponent } from "./components/distributed-link/distributed-link.component";
import { ConfigInformationComponent } from "./components/config-information/config-information.component";

const routers = [
  {
    path: "dashboard",
    title: '仪表盘',
    component: DashboardComponent,
  },
  {
    path: "market",
    title: '我的大盘',
    component: MarketComponent,
  },
  {
    path: "businessList",
    title: '业务列表',
    component: BusinessListComponent,
  },
  {
    path: 'codeList',
    title: '业务码列表',
    component: BussinessCodeListComponent
  },
  {
    path: "clusterList",
    title: '集群列表',
    component: ClusterListComponent,
  },
  {
    path: "linkArchitecture",
    title: '链路架构',
    component: LinkArchitectureComponent,
  },
  {
    path: "singleTracking",
    title: '单笔追踪',
    component: SingleTrackingComponent,
  },
  {
    path: "journeyMap",
    title: '用户旅程图',
    component: UserJourneyMapComponent,
  },
  {
    path: "monitoringAlarm",
    title: '监控告警',
    component: MonitoringAlarmComponent,
  },
  {
    path: "userMonitoring",
    title: '用户监控',
    component: UserMonitoringComponent,
  },
  {
    path: "applicationWall",
    title: '应用墙',
    component: ApplicationWallComponent,
  },
  {
    path: "monitoringScreen",
    title: '业务大屏监控',
    component: MonitoringScreenComponent,
  },
  {
    path: "distributedLink",
    title:'分布式链路追踪',
    component: DistributedLinkComponent,
  },
  {
    path: "configInformation",
    title:'配置信息维护',
    component: ConfigInformationComponent,
  },
];

export { routers };
