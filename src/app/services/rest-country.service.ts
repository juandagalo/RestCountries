import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestCountryService {

  constructor(private http:HttpClient) { }
  

  getCountries(lang:string){

    const url = `https://restcountries.eu/rest/v2/lang/${lang}`;

    return this.http.get(url);

  }

  getCountryEs(){

    return this.getCountries('es');

  }

  getCountryEn(){
    
    return this.getCountries('en');

  }

  getCountryFr(){
    return this.getCountries('fr');
  }
}
