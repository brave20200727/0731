import { Component } from '@angular/core';

type TBloodTypeList = Array<{id: number, text: string}>;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mailMe = true;
}
