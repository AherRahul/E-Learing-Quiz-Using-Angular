import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../screen.service';

@Component({
  selector: 'app-multi-select-result',
  templateUrl: './multi-select-result.component.html',
  styleUrls: ['./multi-select-result.component.css']
})
export class MultiSelectResultComponent implements OnInit {

  question_2_result : any;
  result : string;
  arr : Array<number> = [0,0,0,0]; 
  i :number = 0;
  j :number = 0;
  constructor(private screenservice : ScreenService) { }

  ngOnInit() {
    this.question_2_result = this.screenservice.getrquestion2esultdetails();
    
    this.result = (localStorage.getItem("question_2_result"));

    while(this.j != this.result.length)
    {
      if (this.j%2 == 0)
      {
        this.arr[parseInt(this.result[this.j])-1] = parseInt(this.result[this.j]);
      }
      this.j++;
    }
  }
}
