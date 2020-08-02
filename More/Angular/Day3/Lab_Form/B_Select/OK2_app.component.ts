import { Component } from '@angular/core';

type TCityList = Array<{id: number, text: string}>;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCity:number = 4;
  
  cityList:TCityList = [
    {id: 2, text: "Taipei"},
    {id: 4, text: "TaiChung"},
    {id: 6, text: "TaiNan"}
  ]  
}
