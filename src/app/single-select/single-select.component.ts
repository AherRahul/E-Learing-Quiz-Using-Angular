import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../screen.service';


@Component({
  selector: 'app-single-select',
  templateUrl: './single-select.component.html',
  styleUrls: ['./single-select.component.css']
})
export class SingleSelectComponent implements OnInit {

  question_1 : any;
  
  constructor(private screenservice : ScreenService) { }

  ngOnInit() {
    this.question_1 = this.screenservice.getquestion1details();
  }

  save_ss_vote(i)
  {
    let key = 'question_1_result';
    localStorage.setItem(key, i);
  }
  
}
