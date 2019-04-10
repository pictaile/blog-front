import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticlesService} from '../../general/xhr/articles/articles.service';
import {FacebookService} from 'ngx-facebook';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  public data;
  public id;

  constructor(
    private route: ActivatedRoute,
    protected articlesService: ArticlesService,
    private fb: FacebookService
  ) { }

  public ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.getArticle();

    });
  }

  public getArticle() {
    this.articlesService.getArticles(this.id).subscribe(
      res => {
        this.data = res;
      }
    );
  }

  public save() {
    const res = this.generate();
    this.articlesService.save(res).subscribe((_) => {});
  }

  private generate() {
    return {
      content: this.data.content,
      title: this.data.title,
      id: this.data.id
    };
  }

}
