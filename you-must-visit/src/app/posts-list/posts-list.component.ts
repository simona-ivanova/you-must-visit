import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { Post } from '../model/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent {

  postData !: Observable<Array<any>>;

  description !: string;
  title !: string;
  coverPhoto !: string;
  post !: string
  id !: string;

  formState: string = "Добави Нов";

  isSuccess: boolean = false;
  successMessage !: string;

  constructor(private apiService: ApiService) {
    this.getData();
  }

  showAlert(message: string) {
    this.isSuccess = true;
    this.successMessage = message;
  }

  onSubmit(values: object):void {

    if (this.formState == 'Добави Нов') {
      this.apiService.addData(values)
        .then(() => {
          this.showAlert('Data Saved Successfuly');
        })
        .catch((err) => {
          console.log(err);
        })
    } else if (this.formState == 'Редактирай') {
      this.apiService.updateData(this.id, values)
        .then(() => {
          this.showAlert('Data Edited Successfuly');
        })
        .catch(err => {
          console.log(err);
        })
        
    }
  }

  getData() {
    this.postData = this.apiService.getData();
  }

  updateData(description: string, title: string, post: string, id: string) {
    this.description = description;
    this.title = title;
    this.post = post;
    this.id = id;

    this.formState = 'Редактирай';
    
  }

  deleteData(id: string) {
    this.apiService.deleteData(id)
    .then(()=> {
      this.showAlert('Data Deleted Successfuly');
    })
    .catch(err=> {
      console.log(err); 
    })
  }

}

