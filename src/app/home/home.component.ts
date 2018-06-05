import { Component, OnInit ,OnChanges} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
name="srinu";
data=true;
show:number=4;
rnbtn=true;
edited=true;
lessedited=false;
countrries :any=[{"code":"ind","name":"india"},{"code":"uk","name":"UK"},{"code":"us","name":"USA"},
{"code":"can","name":"CANADA"},{"code":"ind","name":"india"},{"code":"uk","name":"UK"},{"code":"us","name":"USA"},
{"code":"can","name":"CANADA"},{"code":"ind","name":"india"},{"code":"uk","name":"UK"},{"code":"us","name":"USA"},{"code":"can","name":"CANADA"}
];
  constructor() {   
    this.name="kumar";
    console.log(this.name);
  }

  ngOnInit() {
  }
  read(){
    this.show=this.show+4;
    this.lessedited=true;
    if(this.show==this.countrries.length)
    {
      this.edited=false;
  }
}
 less(){
  this.show=this.show-4;
  if(this.show==4)
  {
    this.lessedited=false;
    this.edited=true;
}

}
  mydata(){
    this.data=false;
  }  

}
