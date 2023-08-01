import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPostComponent } from './new-post/new-post.component';
import { CurrentPostComponent } from './current-post/current-post.component';



@NgModule({
  declarations: [
    NewPostComponent,
    CurrentPostComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PostModule { }
