import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../screen.service';

@Component({
  selector: 'app-ss-feeedback',
  templateUrl: './ss-feeedback.component.html',
  styleUrls: ['./ss-feeedback.component.css']
})
export class SsFeeedbackComponent implements OnInit {

  question_1_result : any;
  result : any;

  constructor(private screenservice : ScreenService) { }

  ngOnInit() {
    this.question_1_result = this.screenservice.getrquestion1esultdetails();
    this.result = parseInt(localStorage.getItem("question_1_result")) - 1;
  }

}
