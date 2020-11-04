import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  constructor(public router: Router) {}

  @ViewChild('ProfileComponent') child;

  ngOnInit(): void {}
  listen(e) {
    console.log(e);
  }

  getChildren() {
    this.child.getData();
    console.log(this.child.data);
  }
}
