import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../screen.service';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent implements OnInit {

  question3 : any;

  constructor(private screenservice : ScreenService) { }

  ngOnInit() {
    this.question3 = this.screenservice.getquestion3details();  
  }

  onsubmit(value)
  {
    let key = 'question_3_result';
    localStorage.setItem(key, value);
  }
  
  
}
