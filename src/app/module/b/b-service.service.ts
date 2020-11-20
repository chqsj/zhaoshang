import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BServiceService {
  public bData: any = {
    name:'这是bService'
  };
  constructor() {}
  change() {
    this.bData.name = '自定义bService';
  }
}
