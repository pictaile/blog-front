import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { FacebookService, InitParams } from 'ngx-facebook';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public url;
  constructor(
    protected toastrService: ToastrService,
    private fb: FacebookService
    ) {
  }

  public ngOnInit() {
    this.url = 'http://test.com.ua/?id=adsfasdfasdfasdf';
    const initParams: InitParams = {
      appId: '326030841299648',
      xfbml: true,
      version: 'v2.8'
    };
    this.fb.init(initParams);

    setTimeout(() => {
      this.toastrService.success('Hello world!', 'Toastr fun!');
    }, 500);

  }

}
