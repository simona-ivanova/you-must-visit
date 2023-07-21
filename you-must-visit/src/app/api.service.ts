import { Injectable } from '@angular/core';

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

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // postData!: Observable<any>;

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

  updateData(id: string, data: object) {
    const docInstance = doc(this.firestore, 'posts', id);
    return updateDoc(docInstance, data);
  }

  deleteData(id: string) {
    const docInstance = doc(this.firestore, 'posts', id);
    return deleteDoc(docInstance);
  }


}
