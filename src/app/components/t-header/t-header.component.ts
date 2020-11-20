import { Component, OnInit } from '@angular/core';
import { routers } from '../../routers';

@Component({
  selector: 'app-t-header',
  templateUrl: './t-header.component.html',
  styleUrls: ['./t-header.component.scss'],
})
export class THeaderComponent implements OnInit {
  public routerList: any[];
  constructor() {}

  ngOnInit(): void {
    this.routerList = routers.slice(0, -3);
  }
}
