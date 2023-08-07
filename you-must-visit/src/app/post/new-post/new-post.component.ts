import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent {

  constructor(private apiService: ApiService, private router: Router) { }

  newPostSubmitHandler(form: NgForm): void {

    if (form.invalid) {
      return;
    }

    this.apiService.addData(form.value)
      .then(() => {
        console.log('Data Saved Successfuly');
      })
      .catch((err) => {
        console.log(err);
      })
  }
}
