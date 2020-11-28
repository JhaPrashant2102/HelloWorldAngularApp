import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello from this.title(data binding)';
  imgUrl = "";
  srcUrl = "";
  userName: string="";
  nameError: string="";

  ngOnInit():void{
    this.title="hello from google";
    this.imgUrl = "../assets/logo.png";
    this.srcUrl = "https://www.google.com";
  }

  onClick($event){
    console.log("Save button is clicked",$event);
    window.open(this.srcUrl,"_blank");
    // blank->opens url in new tab
  }

  onInput($event){
    console.log("Change event occurred!");
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
    if(nameRegex.test(this.userName)){
      this.nameError="";
      return;
    }
    this.nameError="Name is incorrect";
  }
}