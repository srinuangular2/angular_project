import { Component, OnInit } from '@angular/core';
import { ListofService } from '../myServices/listof.service';

@Component({
  selector: 'app-list-cntry',
  templateUrl: './list-cntry.component.html',
  styleUrls: ['./list-cntry.component.css'],
  providers:[ListofService]
})
export class ListCntryComponent implements OnInit {
  srinuJson:any=[];
  constructor(private srinu:ListofService) { }

  ngOnInit() {
    this.getAllCountries();
  }
  getAllCountries(): void{
    console.log("Hello fetch data ");
   this.srinu.getsrinuList()
    .subscribe(
      (data) => { 
      this.srinuJson =data.json();
      console.log(this.srinuJson );
      },
      error=>alert(error),
    () =>console.log("data displayed")
    );
 }

}
