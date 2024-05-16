import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  constructor( private countriesServices: CountriesService ){}

  public countries: Country[] = []
  public isLoading: boolean = false;

  searchByPais(term: string): void{

    this.isLoading = true;

    this.countriesServices.searchCountry( term )
      .subscribe( countries =>{
        this.countries = countries
        this.isLoading = false;
      });

  }

}
