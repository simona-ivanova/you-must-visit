import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { NewPostComponent } from './new-post/new-post.component';
import { CurrentPostComponent } from './current-post/current-post.component';
import { adminAuthGuard } from '../guards/admin-auth.guard';
import { isLoggedAuthGuard } from '../guards/is-logged-auth.guard';

const routes: Routes = [
  {
    path: 'posts',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: MainComponent,
      },
      {
        path: ':postid',
        component: CurrentPostComponent,
        canActivate:[isLoggedAuthGuard]
      }
    ],
  },
  {
    path: 'new-post',
    component: NewPostComponent,
    canActivate:[adminAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
