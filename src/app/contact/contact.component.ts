import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
srinu:boolean=true;
show:number=2;
hideremove:boolean=false;
hideadd:boolean=true;
countries:any=[{"Name":"India","Code":"Ind"},{"Name":"Australia","Code":"Aus"},
{"Name":"Canada","Code":"Can"},{"Name":"Pakistan","Code":"Pak"},{"Name":"United Kingdom","Code":"UK"},
{"Name":"South Africa","Code":"SA"},{"Name":"Newzeeland","Code":"New"},{"Name":"West Indies","Code":"WI"}]
  constructor() { }

  ngOnInit() {
  }

  hideStr(){
    this.srinu=false;
  }
  read(){
this.show=this.show+2
this.hideremove=true;
if(this.show==this.countries.length){
  this.hideadd=false;
}
  }
  less(){
    this.show=this.show-2;
    if(this.show==2){
      this.hideremove=false;
      this.hideadd=true;

    }
  }
}
