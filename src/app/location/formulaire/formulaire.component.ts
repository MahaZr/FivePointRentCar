import { Component, OnInit } from '@angular/core';
import { AmadeusService } from './../../amadeus.service';
import { Options } from 'ng5-slider';
import {LabelType} from 'ng5-slider';
import { delay } from 'rxjs/operators';
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
  datas2;
  valider;
  test;
  datasAero;
  datasfil;
  public saisi = '';
  public selectedAero = '';
  public selectedlab = '';
  public state = true;
  public actiiiiv = false;
  public hider = false;
  public tab = [];
  public tab2 =[];
 
  k = 0;
  myProvider;

  state1 = false;
  maxval;
  
  minValue: number = 100;
  maxValue: number = 400;
  options: Options = {
    floor: 0,
    ceil: 1000,
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
      
      this.datas = file.json();
      for (var i=0; i<this.datas.results.length;i++) {
        this.tab2[i] = false;
      }
      console.log(this.datas.results.length);
      console.log(this.tab2);
      this.datasfil = this.datas;
      this.hider = true;
      for (var i=0;i< this.datasfil.results.length;i++) {
        for (var j=0;j< this.datasfil.results[i].cars.length;j++) {
          this.datasfil.results[i].cars[j].vehicle_info.filtred = true;
        }

      }

    });

  }
  selectprovider(prov : string) {
    for (var i=0;i< this.datasfil.results.length;i++) {
      for (var j=0;j< this.datasfil.results[i].cars.length;j++) {
        if (this.datasfil.results[i].provider.company_code !== prov) {
          this.datasfil.results[i].cars[j].vehicle_info.filtred = false;
        }


      }
    }
  }
  max(maxval1 : number,minval1:Number){
    
   
    var s : Number;
    var verif :boolean;
    console.log(maxval1,minval1);
    for (var i=0;i< this.datasfil.results.length;i++) {
      for (var j=0;j< this.datasfil.results[i].cars.length;j++) {
        this.datasfil.results[i].cars[j].vehicle_info.filtred = true;
      }

    }
    
    for (var i=0;i< this.datasfil.results.length;i++) {
      for (var j=0;j< this.datasfil.results[i].cars.length;j++) {
       s = parseInt( this.datasfil.results[i].cars[j].rates[0].price.amount);
       
       verif = !(s>minval1 && s<maxval1);
       console.log(minval1,s,maxval1,verif);
       

        if ( verif) {
          this.datasfil.results[i].cars[j].vehicle_info.filtred = false
        }
      }
    }
    

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

      mouseEnter2(k) {

        this.tab2[k] = true;
        console.log(this.tab2);



      }
      mouseLeave2(k) {
        this.tab2[k] = false;
      }

    }
