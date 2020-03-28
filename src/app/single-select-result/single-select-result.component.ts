import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../screen.service';

@Component({
  selector: 'app-single-select-result',
  templateUrl: './single-select-result.component.html',
  styleUrls: ['./single-select-result.component.css']
})
export class SingleSelectResultComponent implements OnInit {
  
  question_1_result : any;
  result : any;

  constructor(private screenservice : ScreenService) { }

  ngOnInit() {
    this.question_1_result = this.screenservice.getrquestion1esultdetails();
    this.result = parseInt(localStorage.getItem("question_1_result")) - 1; 
  }

}
