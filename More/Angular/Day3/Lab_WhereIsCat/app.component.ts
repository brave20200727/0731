import { Component, ViewChild, ElementRef } from '@angular/core';

type TOptionList = Array<{score: number, hint: string, imageUrl: string}>;
type TQuestion = {description: string, optionList: TOptionList};
declare function showToast(h, t): any;

declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  hoverIdx = -1;

  question: TQuestion = {
    description: "哪一隻是貓?",
    optionList: [
      {score: 0, hint: "狗", imageUrl: "/assets/images/dog.jpeg"},
      {score: 5, hint: "貓", imageUrl: "/assets/images/cat.jpeg"},
      {score: 0, hint: "兔", imageUrl: "/assets/images/rabbit.jpeg"}
    ]
  }

  imageClick(index) {
    if (this.question.optionList[index].score > 0) {
      showToast("Hint", "恭喜! 答對了!");
    }
    else {
      showToast("Hint", "不對哦! 我是" + this.question.optionList[index].hint);
    }
  }

  // ngAfterViewInit() {
  //   $(".pet").on("mouseenter", function () {
  //     $(this).removeClass("img-thumbnail");
  //   })
  //   $(".pet").on("mouseleave", function () {
  //     $(this).addClass("img-thumbnail");
  //   })
  // }  

}
