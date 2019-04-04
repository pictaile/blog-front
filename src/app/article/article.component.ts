import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  public id;

  constructor(private route: ActivatedRoute) { }

  public ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

}
