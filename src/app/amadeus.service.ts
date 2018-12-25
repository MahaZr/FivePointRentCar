import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class AmadeusService {
  url1;
  url2; url3; url4;
  v1;
  v2;
  constructor(private http: Http) {
    this.url1 = 'http://api.sandbox.amadeus.com/v1.2/cars/search-airport?location=';
    this.url2 = '&pick_up=';
    this.url3 = '&drop_off=';
    this.url4 = '&apikey=QmERCpEBi4SBw8aRLxvz89BWg8tr8Ijw';
  }
  LoadData(city, pick_up, drop_off) {
    return this.http.get(this.url1 + '' + city + '' + this.url2 + '' + pick_up + '' + this.url3 + '' + drop_off + '' + this.url4 );
}
getaero(carc : string){
  return this.http.get('https://cors.io/?https://api.sandbox.amadeus.com/v1.2/airports/autocomplete?apikey=Aj6oZvpsUpofXQG0jmFfXed5sds1THuy&term='+carc);
}

forToSer(datas, K){
this.v1 = datas;
console.log(K);
}
serToFil(){
  return this.v1;
}

filToSer(datasfiltre, K){
  this.v2= datasfiltre;
  console.log(K);
}
serToFor(){
  return this.v2;
}
filtre(){
  
}

  }
