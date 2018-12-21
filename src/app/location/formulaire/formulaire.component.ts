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
  test;
  datasAero;
  public saisi = '';
  public selectedAero = '';
  public selectedlab = '';
  public state = true;
  public actiiiiv = false;
  public tab = [];
  constructor(public data: AmadeusService) { }

  Save(selectedAero, pick_up, drop_off) {
    this.data.LoadData(selectedAero, pick_up, drop_off).subscribe(file => {
      console.log(file.json());
      this.datas = file.json();
    });
  }
  ngOnInit() {
  }

  surchaero(){
  console.log(this.saisi);
    if(this.saisi.length > 2) {

      this.state= true;
        this.data.getaero(this.saisi).subscribe(file1 => {
          this.test=file1.json();
        for(let i of this.test){
          this.tab[i]=false ;
        }
        
        });
      }
      else {
        this.state = false ;
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