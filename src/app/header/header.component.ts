import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgForm } from '@angular/Forms';





@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  items: Observable<any>;
  itemsRef: AngularFireList<any>;
  data: any;
  constructor(db: AngularFireDatabase) {
    this.itemsRef = db.list('voiture');
    // Use snapshotChanges().map() to store the key
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes => changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    );
  }

  ngOnInit() {
  }
  //onClick() {
  // if (this.nom === "five" && this.pwd === "point") {
  ///  console.log("vous etes connecté");
  // }
  //  else {
  //   console.log("erreur d'authentification");
  //}
  //}
  submit(f: NgForm) {
    console.log(f.value);
    this.itemsRef.push(f.value);
  }
}

