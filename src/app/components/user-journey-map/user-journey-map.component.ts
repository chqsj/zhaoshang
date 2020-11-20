import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import G6 from '@antv/g6';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-user-journey-map',
  templateUrl: './user-journey-map.component.html',
  styleUrls: ['./user-journey-map.component.scss'],
})
export class UserJourneyMapComponent implements OnInit {
  @ViewChild('map', { static: false }) myMap: ElementRef;
  @ViewChild('journeyContainer', { static: false })
  journeyContainer: ElementRef;

  // 是否展示用户旅程图首页
  showIndex: boolean = false;
  timeFrame: any = 'nearThree';
  searchText: string = '';
  index2 = 0;
  listOfData: any = [];

  tableSpining = false;
  loading = false; // 是否显示加载
  isSee = false; // 是否显示查询后的流程图 isSee=true&&loading=true时才满足
  mapdata = {
    // 点集
    nodes: [
      {
        id: 'node1', // String，该节点存在则必须，节点的唯一标识
        label: 'node1',
        style: {
          fill: '#fff',
          fontSize: 22,
          width: 30,
        },
        x: 100, // Number，可选，节点位置的 x 值
        y: 50, // Number，可选，节点位置的 y 值
      },
      {
        id: 'node2', // String，该节点存在则必须，节点的唯一标识
        label: 'node2',
        style: {
          fill: '#fff',
          fontSize: 12,
        },
        x: 150, // Number，可选，节点位置的 x 值
        y: 60, // Number，可选，节点位置的 y 值
      },
      {
        id: 'node3', // String，该节点存在则必须，节点的唯一标识
        label: 'node3',
        style: {
          fill: '#fff',
          fontSize: 12,
        },
        x: 200, // Number，可选，节点位置的 x 值
        y: 80, // Number，可选，节点位置的 y 值
      },
    ],
    // 边集
    edges: [
      {
        source: 'node1', // String，必须，起始点 id
        target: 'node2', // String，必须，目标点 id
      },
      {
        source: 'node2', // String，必须，起始点 id
        target: 'node3', // String，必须，目标点 id
      },
    ],
  };
  constructor(public http: HttpService) {}

  ngOnInit(): void {
    // this.getJourneyList('12345678902');
    this.getJourneyLine('12345678901');
  }

  async getJourneyList(phone) {
    const res = await this.http.getJourneyList(phone);
    this.tableSpining = false;
    this.listOfData = res;
    console.log(res);
  }
  async getJourneyLine(phone) {
    const res = await this.http.getJourneyLine(phone);
    console.log(res);
  }

  // 旅程图首页搜索按钮
  indexSearch() {
    this.showIndex = false;
    this.tableSpining = true;
    this.getJourneyList(this.searchText);
  }

  // 当前激活 tab 面板的 序列号变更回调函数
  nzSelectedIndexChange(e) {
    console.log('当前激活 tab 面板的 序列号变更回调函数', e);
  }

  // 当前激活 tab 面板变更回调函数
  nzSelectChange(e) {
    console.log('当前激活 tab 面板变更回调函数', e);
  }

  nzClick(e) {
    console.log(e);
  }

  nzSelect(e) {
    console.log(e);
  }

  rowClick(e, data) {
    this.isSee = false;
    this.loading = true;
    setTimeout(() => {
      this.isSee = true;
    }, 1000);
  }

  showMap() {
    // this.getGraph();
  }

  getGraph() {
    console.log(this.journeyContainer);
    console.log(document.getElementById('map'));
    console.log(document.getElementById('map').style.backgroundColor);
    console.log('创建关系图');

    const width = document.getElementById('map').scrollWidth;
    const height = document.getElementById('map').scrollHeight;
    console.log(width, height);

    // 第三步 创建关系图
    const graph = new G6.Graph({
      container: 'map',
      width,
      height,
      defaultNode: {
        type: 'circle',
        style: {
          fill: 'red',
          fontSize: 14,
        },
      },
      defaultEdge: {
        type: 'line-with-arrow',
        style: {
          fill: '#fff',
          fontSize: 14,
        },
      },
    });

    // 第四步  读取步骤2的数据源 配置数据源，渲染
    graph.data(this.mapdata);
    graph.render();
  }
}
