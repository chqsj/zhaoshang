import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../service/http.service';
import { AServiceService } from '../../../a/a-service.service';
@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss'],
})
export class ArtComponent implements OnInit {
  public messages: any = '';
  constructor(public service: HttpService, public aService: AServiceService) {}

  ngOnInit(): void {
    this.messages = this.service.getMessage();
  }

  change(){
    this.aService.change()
  }
}
