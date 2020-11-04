import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(public http: HttpClient) {}

  fetchBusinessList(queryParams) {
    return new Promise((resolve, reject) => {
      let url = '../../assets/business-data.json';
      setTimeout(() => {
        this.http.get(url).subscribe((data: any) => {
          console.log(data);
          
          resolve(data);
        });
      }, 600);
    });
  }


  searchList(params){
    return new Promise((resolve, reject) => {
      let url = '/bussiness/list';
      setTimeout(() => {
        this.http.post(url,params).subscribe((data: any) => {
          console.log(params);
          console.log(data);
          // resolve(data);
        });
      },0);
    });

  }
}
