import { Component, OnInit } from '@angular/core';
import { RestCountryService } from 'src/app/services/rest-country.service';

@Component({
  selector: 'app-frances',
  templateUrl: './frances.component.html',
  styleUrls: []
})
export class FrancesComponent implements OnInit {

  countries:any = {};

  constructor(private restCountry:RestCountryService) {
    this.countries = this.restCountry.getCountryFr().subscribe((data:any)=>
    {
      this.countries = data;

    })
   }

  ngOnInit(): void {
  }

}
