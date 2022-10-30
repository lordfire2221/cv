import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db:AngularFirestore) { }

  createMessage(value:any){
    return this.db.collection('message').add(value);
  }
  getMessage(){
    return this.db.collection('message').valueChanges({idField: 'id'})
  }
  deleteMessage(id:any){
   return this.db.collection('message').doc(id).delete;
  }
}
