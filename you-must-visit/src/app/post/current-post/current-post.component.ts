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

  data !: any

  title !: string
  description !: string
  coverImage !: string
  post !: string

  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getPost()
  }

  getPost() {
    const id = this.activatedRoute.snapshot.params;

    this.apiService.getPostById(id['postid']).then((myPost) => {

      this.data = myPost

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
