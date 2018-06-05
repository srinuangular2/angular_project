import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 

  pageHeader:string="This is my Interpolation Practice Session"
  //termonaryOperratorEx:string="termonary operator"
  termonaryOperratorEx:string=null;
  //imagePath:string="https://www.wisdomimg.com/india/profiledashboard/my-img/logo-wdm.png";
  imagePath:string="india/profiledashboard/my-img/logo-wdm.png";
isDisabled :boolean=false;
badHtml:string='hi srinu <script> alert("Some text");</script> text'

  firstName:string="srinu";
  lastName:string="vas";

  getfullName():string{

    return this.firstName + " " + this.lastName;
  }
 
}
