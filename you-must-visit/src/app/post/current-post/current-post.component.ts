import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-current-post',
  templateUrl: './current-post.component.html',
  styleUrls: ['./current-post.component.css']
})
export class CurrentPostComponent implements OnInit {

  postData !: any

  description !: string;
  title !: string;
  coverImage !: string;
  post !: string
  id !: string;

  isSuccess: boolean = false;
  successMessage !: string;

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getPost()
  }

  showAlert(message: string) {
    this.isSuccess = true;
    this.successMessage = message;
  }

  updateData() {
    this.apiService.updateData(this.id, this.postData)
      .then(() => {
        this.showAlert('Data Edited Successfuly');
      })
      .catch(err => {
        console.log(err);
      })
  }

  getData(description: string, title: string, post: string, id: string) {
    this.description = description;
    this.title = title;
    this.post = post;
    this.id = id;
    this.apiService.addData(this.postData)

  }

  getPost() {
    const id = this.activatedRoute.snapshot.params;
    this.id = id['postid']

    this.apiService.getPostById(this.id).then((myPost) => {

      this.postData = myPost

      this.title = myPost['title']
      this.description = myPost['description']
      this.coverImage = myPost['coverImage']
      this.post = myPost['post']
    })
      .catch(err => {
        console.log(err);
      })
  }

  
  

}
