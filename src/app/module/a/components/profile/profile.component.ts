import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @Output() onVoted: EventEmitter<any> = new EventEmitter();
  public data = 1;
  constructor() {}

  ngOnInit(): void {}
  getData() {
    console.log('------测试一下数据', 11111);
  }
  emitEvent() {
    this.onVoted.emit(1223333);
  }
}
