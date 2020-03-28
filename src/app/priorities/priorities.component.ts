import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { ScreenService } from '../screen.service';
import { TestObject } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-priorities',
  templateUrl: './priorities.component.html',
  styleUrls: ['./priorities.component.css']
})
export class PrioritiesComponent implements OnInit {

  question_4 : any;
  i : number = 0;
  demo : number = 0;
  testobject : {[key : number] :  { annotation : string, value : number}} =  {
    0 : {
      annotation : 'A',
      value : 0
    },
    1 : {
      annotation : 'B',
      value : 1
    },
    2 : {
      annotation : 'C',
      value : 2
    },
    3 : {
      annotation : 'D',
      value : 3
    }  
  };
  
  
  constructor(private screenservice : ScreenService) { }

  ngOnInit() {
    this.question_4 = this.screenservice.getquestion4details();
    
    while(this.i < 4)
    {
      console.log(this.testobject[this.i].annotation + " : " + this.testobject[this.i].value);

      this.i++;
    }
  }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.question_4.options, event.previousIndex, event.currentIndex);
    
    console.log("options_Annotation : " + this.question_4.options[event.previousIndex].options_Annotation + 
    " C.I : " + this.question_4.options[event.currentIndex].value);
    
    console.log("options_Annotation : " + this.question_4.options[event.previousIndex].options_Annotation + 
    " P.I : " + this.question_4.options[event.previousIndex].value);
    
    console.log("options_Annotation : " + this.question_4.options[event.currentIndex].options_Annotation + 
    " P.I : " + this.question_4.options[event.currentIndex].value);
    
    console.log("options_Annotation : " + this.question_4.options[event.currentIndex].options_Annotation + 
    " C.I : " + this.question_4.options[event.previousIndex].value);
    
    this.demo = this.testobject[event.previousIndex].value;

    console.log(this.testobject[event.previousIndex].annotation +" : " + this.testobject[event.previousIndex].value);
    //this.testobject[event.previousIndex].value = this.testobject[event.currentIndex].value
    console.log(this.testobject[event.previousIndex].annotation +" : " + this.testobject[event.previousIndex].value);
    

    console.log(this.testobject[event.currentIndex].annotation +" : " + this.testobject[event.currentIndex].value);
    //this.testobject[event.currentIndex].value = this.demo;
    console.log(this.testobject[event.currentIndex].annotation +" : " + this.testobject[event.currentIndex].value);

    

    console.log("Previous Index : " + (event.previousIndex));
    console.log("Current Index : " + (event.currentIndex));
    
    
  }

}
