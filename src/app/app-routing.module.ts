import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {AdminComponent} from './admin/admin.component';
import {LoginComponent} from './login/login.component';
import {ArticleComponent} from './article/article.component';
import {EditComponent} from './admin/edit/edit.component';
import {GuardService} from './general/guard/guard.service';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full'
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
    canActivate: [GuardService],
    component: AdminComponent
  },
  {
    path: 'admin/edit/:id',
    canActivate: [GuardService],
    component: EditComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
