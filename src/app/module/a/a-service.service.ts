import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AServiceService {
  public aData: any = {
    name: '这是aService',
  };
  constructor() {}

  change() {
    this.aData.name = '自定义aService';
  }
}
