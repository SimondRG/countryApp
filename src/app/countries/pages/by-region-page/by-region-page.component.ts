import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';


type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania'

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  constructor( private countriesServices: CountriesService ){}

  public region: Country[] = []
  public isLoading: boolean = false;
  public regions: Region[] = ['Africa' , 'Americas' , 'Asia' , 'Europe' , 'Oceania'];
  public selectedRegion?: Region;

  searchByRegion(region: Region): void{

    this.selectedRegion = region;

    this.isLoading = true;

    this.countriesServices.searchRegion( region )
      .subscribe( region =>{
        this.region = region;
        this.isLoading = false;
      });

  }

}
