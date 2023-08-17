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

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private firestore: Firestore) { }

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

    let myPost !: any

    const docSnap = await getDoc(docInstance);
    if (docSnap.exists()) {
      let data = docSnap.data()
      myPost = data
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
