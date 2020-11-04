import { Component, OnInit } from '@angular/core';
// import { listOfMapData } from './business-data';
import { HttpService } from '../../service/http.service';

export interface TreeNodeInterface {
  key: string;
  desc: string;
  age?: number;
  level?: number;
  expand?: boolean;
  address?: string;
  children?: TreeNodeInterface[];
  parent?: TreeNodeInterface;
}

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.scss'],
})
export class BusinessListComponent implements OnInit {
  public searchValue: string = '';
  public listOfMapData: any;
  public mapOfExpandedData: { [key: string]: TreeNodeInterface[] } = {};
  public columns: any[] = [
    {
      title: '业务码和描述',
      width: 500,
    },
    {
      title: '架构图',
      width: 100,
    },
    {
      title: '趋势图',
      width: 100,
    },
    {
      title: '创建时间',
      width: 200,
    },
    {
      title: '请求量',
      width: 100,
    },
    {
      title: '响应量',
      width: 100,
    },
    {
      title: '响应率',
      width: 100,
    },
    {
      title: '平均响应时间',
      width: 150,
    },
    {
      title: '最大响应时间',
      width: 150,
    },
    {
      title: '成功量',
      width: 100,
    },
    {
      title: '成功率',
      width: 100,
    },
    {
      title: '采样',
      width: 100,
    },
    {
      title: '错误码',
      width: 300,
    },
  ];
  public pageData: any = {
    pageSize: 10,
    pageIndex: 1,
    total: 0,
  };
  public spining: boolean = false;
  constructor(public http: HttpService) {}

  ngOnInit(): void {
    this.getList();
  }
  async getList() {
    this.spining = true;
    let list: any = await this.http.fetchBusinessList(this.pageData);
    this.pageData.total = list.length;
    this.spining = false;
    this.listOfMapData = list;
    console.log(this.pageData);
    
    this.listOfMapData.forEach((item) => {
      this.mapOfExpandedData[item.key] = this.convertTreeToList(item);
    });
  }

  onChange(result: Date): void {
    console.log('Selected Time: ', result);
  }

  onOk(result: Date | Date[] | null): void {
    console.log('onOk', result);
  }

  collapse(
    array: TreeNodeInterface[],
    data: TreeNodeInterface,
    $event: boolean
  ): void {
    if (!$event) {
      if (data.children) {
        data.children.forEach((d) => {
          const target = array.find((a) => a.key === d.key)!;
          target.expand = false;
          this.collapse(array, target, false);
        });
      } else {
        return;
      }
    }
  }

  convertTreeToList(root: TreeNodeInterface): TreeNodeInterface[] {
    const stack: TreeNodeInterface[] = [];
    const array: TreeNodeInterface[] = [];
    const hashMap = {};
    stack.push({ ...root, level: 0, expand: false });

    while (stack.length !== 0) {
      const node = stack.pop()!;
      this.visitNode(node, hashMap, array);
      if (node.children) {
        for (let i = node.children.length - 1; i >= 0; i--) {
          stack.push({
            ...node.children[i],
            level: node.level! + 1,
            expand: false,
            parent: node,
          });
        }
      }
    }

    return array;
  }

  visitNode(
    node: TreeNodeInterface,
    hashMap: { [key: string]: boolean },
    array: TreeNodeInterface[]
  ): void {
    if (!hashMap[node.key]) {
      hashMap[node.key] = true;
      array.push(node);
    }
  }

  // 页码改变的回调
  nzPageIndexChange(e) {
    console.log('页码改变的回调', e);
    this.pageData.pageIndex = e;
    this.getList();
  }
  // 每页条数改变的回调
  nzPageSizeChange(e) {
    console.log('每页条数改变的回调', e);
    this.pageData.pageSize = e;
    this.getList();
  }

  // 立即查询
  search(){
    console.log(this.searchValue);
    this.http.searchList(this.searchValue)
  }
}
