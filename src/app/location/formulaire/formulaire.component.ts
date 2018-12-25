import { Component, OnInit } from '@angular/core';
import { AmadeusService } from './../../amadeus.service';
import { Options } from 'ng5-slider';
import {LabelType} from 'ng5-slider';
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
  test;
  datasAero;
  public saisi = '';
    public selectedAero = '';
  public selectedlab = '';
  public state = true;
  public actiiiiv = false;
  public tab = [];
  minValue: number = 100;
  maxValue: number = 400;
  options: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Min price:</b> $' + value;
        case LabelType.High:
          return '<b>Max price:</b> $' + value;
        default:
          return '$' + value;
      }
    }
  };
  constructor(public data: AmadeusService) { }

  Save(selectedAero, pick_up, drop_off) {
    this.data.LoadData(selectedAero, pick_up, drop_off).subscribe(file => {
      console.log(file.json());
      this.datas = file.json();
    });
  }
  ngOnInit() {
  }

  surchaero() {
    console.log(this.saisi);
    if (this.saisi.length > 2) {

      this.state = true;
      this.data.getaero(this.saisi).subscribe(file1 => {
        this.test = file1.json();
        for (const i of this.test) {
          this.tab[i] = false;
        }

      });
    } else {
      this.state = false;
    }
  }
  selectaero(value: string, value2: string) {
    this.selectedAero = value;
    this.selectedlab = value2;
    this.state = false;

  }

  mouseEnter(k) {

    this.tab[k] = true;



  }
  mouseLeave(k) {
    this.tab[k] = false;
  }

}
