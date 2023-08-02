import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPostComponent } from './new-post/new-post.component';
import { CurrentPostComponent } from './current-post/current-post.component';
import { PostRoutingModule } from './post-routing.module';



@NgModule({
  declarations: [
    NewPostComponent,
    CurrentPostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
