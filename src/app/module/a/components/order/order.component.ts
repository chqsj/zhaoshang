import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../../../../service/http.service';
import { BServiceService } from '../../../b/b-service.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  constructor(
    public router: Router,
    public service: HttpService,
    public bService: BServiceService
  ) {}

  @ViewChild('ProfileComponent') child;

  ngOnInit(): void {
    console.log(this.bService);
    
  }
  listen(e) {
    console.log(e);
  }

  send() {
    this.service.sendMessage('测试一下');
  }

  getChildren() {
    this.child.getData();
    console.log(this.child.data);
  }

  change(){
    this.bService.change()
  }
}
