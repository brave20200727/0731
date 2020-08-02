import { Component } from '@angular/core';

type TBloodTypeList = Array<{id: number, text: string}>;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bloodType = 2;
  bloodTypeList:TBloodTypeList = [
    {id: 1, text: "A"},
    {id: 2, text: "B"},
    {id: 3, text: "AB"},
    {id: 4, text: "O"}
  ] 
}
