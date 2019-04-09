import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import { FacebookService, InitParams } from 'ngx-facebook';
import {environment} from '../../environments/environment';
import {ArticlesService} from '../general/xhr/articles/articles.service';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public data;

  constructor(
    protected toastrService: ToastrService,
    protected articlesService: ArticlesService,
    private fb: FacebookService
    ) {
  }

  public ngOnInit() {
    this.articlesService.getArticles().subscribe(
      res => {
        this.data = res;
      }
    );

    this.initFB();
  }


  private initFB() {
    const initParams: InitParams = environment.FB;

    this.fb.init(initParams);
  }

}
