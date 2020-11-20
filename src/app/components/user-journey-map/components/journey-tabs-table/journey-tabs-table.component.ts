import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journey-tabs-table',
  templateUrl: './journey-tabs-table.component.html',
  styleUrls: ['./journey-tabs-table.component.scss'],
})
export class JourneyTabsTableComponent implements OnInit {
  listOfData = [
    {
      key: '1',
      time: '14:04:26',
      desc: 'PageLoad(页面加载)',
      url: 'http://abc.com/',
      preview: '预览',
      consumingTime: 345,
    },
    {
      key: '2',
      time: '14:04:26',
      desc: 'PageLoad(页面加载)',
      url: 'http://abc.com/',
      preview: '预览',
      consumingTime: 135,
    },
    {
      key: '3',
      time: '14:04:26',
      desc: 'PageLoad(页面加载)',
      url: 'http://abc.com/',
      preview: '预览',
      consumingTime: 266,
    },
  ];
  constructor() {}

  ngOnInit() {}
}
