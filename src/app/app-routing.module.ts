import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {AdminComponent} from './admin/admin.component';
import {LoginComponent} from './login/login.component';
import {ArticleComponent} from './article/article.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'article/:id',
    component: ArticleComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
