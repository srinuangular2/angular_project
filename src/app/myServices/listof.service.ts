import { Injectable } from '@angular/core';
import { Http,HttpModule } from '@angular/http';

@Injectable()
export class ListofService {

  constructor(private srinu:Http) { }


  getsrinuList(){

    return this.srinu.get('https://restcountries.eu/rest/v2/all')
  }

}


