import { Component } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  updateDoc,
  deleteDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'you-must-visit';
  postData!: Observable<any>;

  constructor(private firestore: Firestore) {
    this.getData();
  }

  addData(f: any) {
    const collectionInstance = collection(this.firestore, 'posts');
    addDoc(collectionInstance, f.value).then(() => {
      console.log('Data Saved Successfully');
    })
      .catch((err) => {
        console.log(err);
      })
  }

  getData() {
    const collectionInstance = collection(this.firestore, 'posts');
    collectionData(collectionInstance, { idField: 'id' })
      .subscribe(val => {
        console.log(val);
      })

    this.postData = collectionData(collectionInstance, { idField: 'id' });
  }

  updateData(id: string) {
    const docInstance = doc(this.firestore, 'posts', id);
    const updateData = {
      title: 'updateTitle'
    }

    updateDoc(docInstance, updateData)
      .then(() => {
        console.log('Data Updated');
      })
      .catch((err) => {
        console.log(err);
      })
  }

  deleteData(id: string) {
    const docInstance = doc(this.firestore, 'posts', id);
    deleteDoc(docInstance)
      .then(() => {
        console.log("Data Deleted");
      })
      .catch((err) => {
        console.log(err);
      })

  }
}
