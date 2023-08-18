import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewPostComponent } from './new-post/new-post.component';
import { CurrentPostComponent } from './current-post/current-post.component';
import { PostRoutingModule } from './post-routing.module';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ckeditor4-angular';

@NgModule({
  declarations: [
    NewPostComponent,
    CurrentPostComponent,
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule,
    CKEditorModule
  ]
})
export class PostModule { }
