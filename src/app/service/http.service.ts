import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(public http: HttpClient) {}

  public messages: any;

  // 获取业务列表
  fetchBusinessList(queryParams) {
    return new Promise((resolve, reject) => {
      let url = '../../assets/json/business-data.json';
      setTimeout(() => {
        this.http.get(url).subscribe((data: any) => {
          console.log(data);

          resolve(data);
        });
      }, 600);
    });
  }

  searchList(params) {
    return new Promise((resolve, reject) => {
      let url = '/bussiness/list';
      setTimeout(() => {
        this.http.post(url, params).subscribe((data: any) => {
          console.log(params);
          console.log(data);
          // resolve(data);
        });
      }, 0);
    });
  }

  // 获取用户行程列表
  getJourneyList(phone) {
    return new Promise((resolve, reject) => {
      let url = '../../assets/json/journey-list.json';
      setTimeout(() => {
        this.http.get(url).subscribe((data: any) => {
          if (phone) {
            resolve(data.filter((j) => j.phone === phone));
          } else {
            resolve(data);
          }
        });
      }, 300);
    });
  }

  // 获取用户行程详情
  getJourneyLine(phone) {
    return new Promise((resolve, reject) => {
      let url = '../../assets/json/journey-line.json';
      setTimeout(() => {
        this.http.get(url).subscribe((data: any) => {
          resolve(data.find((j) => j.phone === phone));
        });
      }, 600);
    });
  }

  sendMessage(value) {
    this.messages = value;
  }

  getMessage() {
    return this.messages;
  }
}
