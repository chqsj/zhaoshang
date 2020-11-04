import { Component, OnInit } from '@angular/core';
import {routers} from '../../routers'

@Component({
  selector: 'app-t-sider',
  templateUrl: './t-sider.component.html',
  styleUrls: ['./t-sider.component.scss']
})
export class TSiderComponent implements OnInit {
  public isCollapsed: boolean = false
  public routerList: any[];
  constructor() { }

  ngOnInit(): void {
    this.routerList = routers
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
