import { Component, OnInit } from '@angular/core';
import { RestCountryService } from 'src/app/services/rest-country.service';

@Component({
  selector: 'app-ingles',
  templateUrl: './ingles.component.html',
  styleUrls: []
})
export class InglesComponent implements OnInit {

  countries:any = {};

  constructor(private restCountry:RestCountryService) {
    this.countries = this.restCountry.getCountryEn().subscribe((data:any)=>
    {
      this.countries = data;

    })
   }

  ngOnInit(): void {
    
  }

}
