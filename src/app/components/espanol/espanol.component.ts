import { Component, OnInit } from '@angular/core';
import { RestCountryService } from 'src/app/services/rest-country.service';

@Component({
  selector: 'app-espanol',
  templateUrl: './espanol.component.html',
  styleUrls: []
})
export class EspanolComponent implements OnInit {

  countries:any = {};

  constructor(private restCountry:RestCountryService) {
    this.countries = this.restCountry.getCountryEs().subscribe((data:any)=>
    {
      this.countries = data;

    })
   }

  ngOnInit(): void {
  }

}
