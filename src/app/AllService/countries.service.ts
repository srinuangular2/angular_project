import { Injectable } from '@angular/core';
import { Http,HttpModule } from '@angular/http';

@Injectable()
export class CountriesService {

  public url="";

  constructor(private http:Http) { }

getCountries(){
this.url="https://restcountries.eu/rest/v2/all";

return this.http.get(this.url);

}


}




