import { Component, OnInit } from '@angular/core';
import { AmadeusService } from '../../../amadeus.service';
import {coerceNumberProperty} from '@angular/cdk/coercion';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  datasfiltre: any;
  datas;
  
  max = 1000;
  min = 0;

  constructor(public data: AmadeusService) { }

 
     
      
  ngOnInit() {
   
  }
  filtre(){
  this.datas = this.data.serToFil();

  console.log(200);



  this.data.filToSer(this.datas,300);
  console.log(400);
} 

}


