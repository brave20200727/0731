import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'app works!';
  price = 100;
  description:string = "";
  get lineBreakDesc() {
    return this.description.replace(/\r\n|\n/g, "<br>");
  }
}
