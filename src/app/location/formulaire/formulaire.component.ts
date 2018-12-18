import { Component, OnInit } from '@angular/core';
import { AmadeusService } from './../../amadeus.service';
@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  city: string;
  pick_up: Date;
  drop_off: Date;
  datas;
  valider;
  constructor(public data: AmadeusService) { }

  Save(city, pick_up, drop_off)  {
    this.data.LoadData(city, pick_up, drop_off).subscribe (file => {
      console.log(file.json());
      this.datas = file.json();
    });
     }
  ngOnInit() {
  }

}
