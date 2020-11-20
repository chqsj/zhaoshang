import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-consuming-time',
  templateUrl: './consuming-time.component.html',
  styleUrls: ['./consuming-time.component.scss'],
})
export class ConsumingTimeComponent implements OnInit {
  @Input() count;
  bgc = '#7866cb';
  initWidth;
  constructor() {}

  ngOnInit(): void {
    this.initWidth = this.count;
    if (this.count > 300) {
      this.bgc = '#ff1900';
    } else if (this.count > 200) {
      this.bgc = '#ffd766';
    } else {
      this.bgc = '#7866cb';
    }
  }
}
