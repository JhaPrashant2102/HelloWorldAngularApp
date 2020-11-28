import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello from this.title(data binding)';

  ngOnInit():void{
    this.title="hello from ngOnInit";
  }
}
