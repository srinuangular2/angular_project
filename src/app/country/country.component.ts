import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../AllService/countries.service';



@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css'],
  providers:[CountriesService]
})
export class CountryComponent implements OnInit {

  returnJson:any=[];

  constructor(private countries:CountriesService) { }

  ngOnInit() {

    this.getAllCountries();   

  }


  getAllCountries(): void{
    console.log("Hello fetch data ");
   this.countries.getCountries()
    .subscribe(
      (data) => { 
      this.returnJson =data.json();
      console.log(this.returnJson );
      },
      error=>alert(error),
    () =>console.log("data displayed")
    );
 }

}
