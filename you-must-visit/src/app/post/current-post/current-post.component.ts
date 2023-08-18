import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  isEditMode: boolean = false;
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

  updateData() {
    this.isEditMode = true;
  }

  onSubmit(form: NgForm): void {

    if (form.invalid) {
      return;
    }

    this.apiService.updateData(this.id, form.value)
      .then(() => {
        this.showAlert('Data Edited Successfuly');
      })
      .catch((err) => {
        console.log(err);
      })

      this.isEditMode = false
      this.getPost()
  }
}
