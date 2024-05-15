import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  constructor( private countriesServices: CountriesService ){}

  public region: Country[] = []

  searchByRegion(region: string): void{

    this.countriesServices.searchRegion( region )
      .subscribe( region =>{
        this.region = region;
      });

  }

}
