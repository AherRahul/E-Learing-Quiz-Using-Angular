import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../screen.service';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';



@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css']
})
export class MultiSelectComponent implements OnInit {

  question2 : any;
  myForm: FormGroup;
  iFormArray : any;

  constructor(private screenservice : ScreenService, private fb: FormBuilder) { }

  ngOnInit() {
    this.question2 = this.screenservice.getquestion2details();
    this.myForm = this.fb.group({
      ms_array: this.fb.array([])
    });
  }

  onChange(i: number, isChecked: boolean) {
    this.iFormArray = <FormArray>this.myForm.controls.ms_array;

    if (isChecked) {
      this.iFormArray.push(new FormControl(i));
    } else {
      let index = this.iFormArray.controls.findIndex(x => x.value == i)
      this.iFormArray.removeAt(index);
    }
  }

  onsubmit()
  {
    let key = 'question_2_result';
    localStorage.setItem(key, this.myForm.value.ms_array );
  }
}
