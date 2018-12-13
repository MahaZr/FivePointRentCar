import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

})


export class HeaderComponent implements OnInit {
  public nom = '';
  public pwd = '';
  constructor() { }

  ngOnInit() {
  }
  onClick() {
    if (this.nom === "five" && this.pwd === "point") {
      console.log("vous etes connecté");
    }

    else {
      console.log("erreur d'authentification");
    }
  }

}

