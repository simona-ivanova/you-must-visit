import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent {

  postData !: Observable<Array<any>>;

  constructor(private apiService: ApiService) {
    this.getData();
  }

  getData() {
    this.postData = this.apiService.getData();
  }

}

