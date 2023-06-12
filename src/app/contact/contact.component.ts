import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
public ajouterMessage!:FormGroup;
  constructor(private fb:FormBuilder,
    private router:Router,
    private route:ActivatedRoute,
    public afAuth: AngularFireAuth,
    public afs: AngularFirestore,
    public firebaseService:FirebaseService,) { 
      this.ajouterMessage = fb.group({
        nom:['',[Validators.required]],
        email:['',[Validators.required,Validators.email]],
        subject:['',[Validators.required]],
        messages:['',[Validators.required]],
      })
    }
    onSubmit(){
      this.firebaseService.createMessage(this.ajouterMessage.value)
      .then(
        (res: any) => {
          if (res){
            alert('message envoyer avec succès .');
            location.reload()

          }
          else
          alert("problème survenue dans l'envoie du message .");
          location.reload();
        }
      )
    }

  ngOnInit(): void {
  }

}
