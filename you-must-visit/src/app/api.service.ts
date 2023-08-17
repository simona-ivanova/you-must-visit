import { Injectable } from '@angular/core';

import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  updateDoc,
  deleteDoc,
  getDoc
} from '@angular/fire/firestore';
import { onSnapshot } from 'firebase/firestore';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private firestore: Firestore) {
    // this.getData();
  }

  addData(data: object) {
    const collectionInstance = collection(this.firestore, 'posts');
    return addDoc(collectionInstance, data);

  }

  getData() {
    const collectionInstance = collection(this.firestore, 'posts');
    return collectionData(collectionInstance, { idField: 'id' });
  }

  async getPostById(id: string) {
    const docInstance = doc(this.firestore, "posts", id);

    // let currentsPost;

    // onSnapshot(docInstance, (doc) => {
    //   currentsPost = doc.data()
    //   console.log(currentsPost);

    //   return currentsPost
    // })

    let myPost !: any;

    let title !: string
    let description !: string
    let coverImage !: string
    let post !: string

    const docSnap = await getDoc(docInstance);
    if (docSnap.exists()) {
      let data = docSnap.data()
      myPost = data

      title = myPost['title']
      
      title = data['title']
      // description = data['description']
      // coverImage = data['coverImage']
      // post = data['post']
      console.log(title);
    }
    return myPost

  }

  updateData(id: string, data: object) {
    const docInstance = doc(this.firestore, 'posts', id);
    return updateDoc(docInstance, data);
  }

  deleteData(id: string) {
    const docInstance = doc(this.firestore, 'posts', id);
    return deleteDoc(docInstance);
  }


}
