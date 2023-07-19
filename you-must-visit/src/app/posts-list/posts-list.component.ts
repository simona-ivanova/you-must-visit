import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { inject } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Post } from '../model/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent {

  constructor() {
    
  }

}

