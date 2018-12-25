import { Component, OnInit } from '@angular/core';
import { AmadeusService } from './../../amadeus.service';
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
  public tab = [];
  k = 0;
  myProvider;
  state1 = false;
  maxval;
  constructor(public data: AmadeusService) { }

  Save(selectedAero, pick_up, drop_off) {
    this.data.LoadData(selectedAero, pick_up, drop_off).subscribe(file => {
      console.log(file.json());
      this.datas = file.json();
      this.datasfil = this.datas;

      for (var i=0;i< this.datasfil.results.length;i++) {
        for (var j=0;j< this.datasfil.results[i].cars.length;j++) {
          this.datasfil.results[i].cars[j].vehicle_info.filtred = true;
        }

      }





    });

  }
  switchstate() {
    for (var i=0;i< this.datasfil.results.length;i++) {
      for (var j=0;j< this.datasfil.results[i].cars.length;j++) {
        if (this.datasfil.results[i].provider.company_code !== this.myProvider) {
          this.datasfil.results[i].cars[j].vehicle_info.filtred = false;
        }


      }
    }
  }
  max(maxval1){
    console.log(maxval1);
    maxval1=parseInt(maxval1);
    var s;
    for (var i=0;i< this.datasfil.results.length;i++) {
      for (var j=0;j< this.datasfil.results[i].cars.length;j++) {
       s = parseInt( this.datasfil.results[i].cars[j].rates[0].price.amount);
        if ( s>maxval1) {
          this.datasfil.results[i].cars[j].vehicle_info.filtred = false;
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

    }
