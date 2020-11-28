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
}