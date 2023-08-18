import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  postData !: Observable<Array<any>>;

  constructor(private apiService: ApiService) {
    this.getData();
  }

  getData() {
    this.postData = this.apiService.getData();
  }
}
