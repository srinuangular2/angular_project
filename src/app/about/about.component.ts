import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  srinu:boolean=true;
  add:boolean=true;
  remove:boolean=false;
  show:number=4;
  cntrList:any=[{'name':'India', 'Code':'Ind'},{'name':'Pakistan', 'Code':'Pak'},
  {'name':'Austrlia', 'Code':'Aus'},{'name':'Canada', 'Code':'can'},
  {'name':'United Kingdom', 'Code':'Uk'},{'name':'United States', 'Code':'Us'},
  {'name':'newzeeland', 'Code':'new'},{'name':'South Africa', 'Code':'sa'},
  {'name':'bangladesh', 'Code':'ban'},{'name':'England', 'Code':'eng'},
  {'name':'westindies', 'Code':'wi'},{'name':'italy', 'Code':'it'},
  {'name':'saodi arebia', 'Code':'sad'},{'name':'indonasia', 'Code':'Ind'},
  {'name':'malisia', 'Code':'ma'},{'name':'unted satets of america', 'Code':'usa'},
  {'name':'srilanka', 'Code':'sri'}]
  constructor() { }

  ngOnInit() {
  }

  strDir(){
    this.srinu=false;
  }
  addList(){
    this.show=this.show+4
    this.remove=true;
    if(this.show==this.cntrList.length){
      this.add=false;
    }
    }

  removeList(){
    this.show=this.show-4
    if(this.show==4){
      this.remove=false;
      this.add=true;
    }
  

  }


}
