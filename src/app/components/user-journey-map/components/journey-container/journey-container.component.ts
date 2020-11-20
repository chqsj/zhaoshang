import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import G6 from '@antv/g6';

@Component({
  selector: 'app-journey-container',
  templateUrl: './journey-container.component.html',
  styleUrls: ['./journey-container.component.scss'],
})
export class JourneyContainerComponent implements OnInit {
  @Input() loading: boolean;
  @Input() isSee: boolean;
  @Output() showMap = new EventEmitter();

  data = {
    // 点集
    nodes: [
      {
        id: 'node1', // String，该节点存在则必须，节点的唯一标识
        x: 100, // Number，可选，节点位置的 x 值
        y: 100, // Number，可选，节点位置的 y 值
        consumingTime: '1931',
        signin: 'APP',
        createTime: '14:04:26',
      },
      {
        id: 'node2', // String，该节点存在则必须，节点的唯一标识
        x: 350, // Number，可选，节点位置的 x 值
        y: 100, // Number，可选，节点位置的 y 值
        consumingTime: '131',
        signin: 'IFanCalendar',
        createTime: '14:04:26',
      },
      {
        id: 'node3', // String，该节点存在则必须，节点的唯一标识
        x: 600, // Number，可选，节点位置的 x 值
        y: 100, // Number，可选，节点位置的 y 值
        consumingTime: '569',
        signin: '北京公积金',
        createTime: '14:04:26',
      },
      {
        id: 'node4', // String，该节点存在则必须，节点的唯一标识
        x: 800, // Number，可选，节点位置的 x 值
        y: 100, // Number，可选，节点位置的 y 值
        consumingTime: '569',
        signin: '北京公积金',
        createTime: '14:04:26',
      },
      {
        id: 'node5', // String，该节点存在则必须，节点的唯一标识
        x: 1000, // Number，可选，节点位置的 x 值
        y: 100, // Number，可选，节点位置的 y 值
        consumingTime: '569',
        signin: '北京公积金',
        createTime: '14:04:26',
      },
      {
        id: 'node6', // String，该节点存在则必须，节点的唯一标识
        x: 1200, // Number，可选，节点位置的 x 值
        y: 100, // Number，可选，节点位置的 y 值
        consumingTime: '569',
        signin: '北京公积金',
        createTime: '14:04:26',
      },
      {
        id: 'node7', // String，该节点存在则必须，节点的唯一标识
        x: 1400, // Number，可选，节点位置的 x 值
        y: 100, // Number，可选，节点位置的 y 值
        consumingTime: '569',
        signin: '北京公积金',
        createTime: '14:04:26',
      },
      {
        id: 'node8', // String，该节点存在则必须，节点的唯一标识
        x: 1600, // Number，可选，节点位置的 x 值
        y: 300, // Number，可选，节点位置的 y 值
        consumingTime: '1931',
        signin: 'APP',
        createTime: '14:04:26',
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
      {
        source: 'node3', // String，必须，起始点 id
        target: 'node4', // String，必须，目标点 id
      },
      {
        source: 'node3', // String，必须，起始点 id
        target: 'node5', // String，必须，目标点 id
      },
      {
        source: 'node3', // String，必须，起始点 id
        target: 'node6', // String，必须，目标点 id
      },
      {
        source: 'node3', // String，必须，起始点 id
        target: 'node7', // String，必须，目标点 id
      },
      {
        source: 'node3', // String，必须，起始点 id
        target: 'node8', // String，必须，目标点 id
      },
    ],
  };

  textXML = (cfg) => `
  <rect style={{ width: 140, height: 120, radius: 8 }}
  keyshape="true" name="test"
  cursor="move">
  <rect name='child'  style={{
    width: 100, height: 40, fill: '#465686', radius:6,marginTop: 10, marginLeft: 20
  }}>
  <text style={{ 
    textAlign: 'center',
    marginTop: 13,
    marginLeft: 70,
    fill: '#fff' }}>${cfg.consumingTime}毫秒</text>
    <text style={{ 
      textAlign: 'center',
      marginTop: 40,
      marginLeft: 70,
      fontWeight: 'bold',
      fill: '#fff' }}>${cfg.signin}</text>
      <text style={{ 
        textAlign: 'center',
        marginTop: 50,
        marginLeft: 70,
        fill: '#757d97' }}>${cfg.createTime}</text>
  </rect>
  </rect>
`;

  constructor() {}

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges): void {
    const { loading, isSee } = changes;
    if (loading.currentValue && isSee.currentValue) {
      this.showMap.emit(this);
      this.renderGraph();
    }
  }

  renderGraph() {
    console.log(document.getElementById('map'));

    const width = document.getElementById('map').scrollWidth;
    const height = document.getElementById('map').scrollHeight;
    console.log(width);
    console.log(height);

    const graph = new G6.Graph({
      container: 'map',
      width,
      height,
      // fitView：设置是否将图适配到画布中；
      // fitViewPadding：画布上四周的留白宽度。
      fitView: true,
      // fitViewPadding: true,
      // fitViewPadding: [20, 40, 50, 20],
      defaultNode: {
        type: 'test',
        size: 40,
        style: {
          fill: '#2f3655',
          fontSize: 40,
          // stroke: 'red',
        },
        labelCfg: {
          position: 'left',
          // refX: 5,
          style: {
            // fill: '#bae637',
            // fontSize: 15,
          },
        },
      },
      defaultEdge: {
        type: 'line',
        style: {
          stroke: '#586ca5',
          lineWidth: 3,
          endArrow: {
            // path: G6.Arrow.triangle(10, 20, 25), // 使用内置箭头路径函数，参数为箭头的 宽度、长度、偏移量（默认为 0，与 d 对应）
            // path: G6.Arrow.vee(10, 20, 25),
            path: G6.Arrow.vee(10, 10, 0),
          },
        },
      },
      // 节点不同状态下的样式集合
      nodeStateStyles: {
        // 鼠标 hover 上节点，即 hover 状态为 true 时的样式
        hover: {
          fill: '#2f3655',
          stroke: '#3d85d9',
          lineWidth: 3,
          cursor: 'pointer',
          child: {
            fill: 'red',
            cursor: 'pointer',
          },
        },
        // 鼠标点击节点，即 click 状态为 true 时的样式
        click: {
          stroke: '#3d85d9',
          lineWidth: 3,
          child: {
            fill: 'red',
            cursor: 'pointer',
          },
        },
      },
      // 边不同状态下的样式集合
      edgeStateStyles: {
        // 鼠标点击边，即 click 状态为 true 时的样式
        click: {
          stroke: 'steelblue',
        },
      },
    });

    // 鼠标进入节点
    graph.on('node:mouseenter', (e) => {
      const nodeItem = e.item; // 获取鼠标进入的节点元素对象
      graph.setItemState(nodeItem, 'hover', true); // 设置当前节点的 hover 状态为 true
    });

    // 鼠标离开节点
    graph.on('node:mouseleave', (e) => {
      const nodeItem = e.item; // 获取鼠标离开的节点元素对象
      graph.setItemState(nodeItem, 'hover', false); // 设置当前节点的 hover 状态为 false
    });

    // 点击节点
    graph.on('node:click', (e) => {
      // 先将所有当前是 click 状态的节点置为非 click 状态
      const clickNodes = graph.findAllByState('node', 'click');
      clickNodes.forEach((cn) => {
        graph.setItemState(cn, 'click', false);
      });
      const nodeItem = e.item; // 获取被点击的节点元素对象
      nodeItem._cfg.group.cfg.children[1].cfg.attrs.fill = 'red';
      console.log(nodeItem._cfg.group.cfg.children[1].cfg.attrs);
      graph.setItemState(nodeItem, 'click', true); // 设置当前节点的 click 状态为 true
    });

    // 点击边
    graph.on('edge:click', (e) => {
      // 先将所有当前是 click 状态的边置为非 click 状态
      const clickEdges = graph.findAllByState('edge', 'click');
      clickEdges.forEach((ce) => {
        graph.setItemState(ce, 'click', false);
      });
      const edgeItem = e.item; // 获取被点击的边元素对象
      graph.setItemState(edgeItem, 'click', true); // 设置当前边的 click 状态为 true
    });
    G6.registerNode('test', {
      jsx: this.textXML,
    });
    graph.data(this.data); // 加载远程数据
    graph.render(); // 渲染
  }
}
