import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { db } from './facilitator_demo';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {

  user = db.user_screen;
  fac = db.fac_screen;
  
  question_1 = db.user_screen[1];
  question_2 = db.user_screen[2];
  question_3 = db.user_screen[3];
  question_4 = db.user_screen[4];
  
  result_1 = db.fac_screen[1];
  result_2 = db.fac_screen[2];

  results : any;
  configUrl = 'assets/screen.json';

  constructor(private http: HttpClient) { }

  /*  ------- USER -------*/
  // this method returns the user screen specific data
  // purpose of this method to return the name of screen displayed on user screen's buttons.
  // this method is also used to find out the routing path for each buttons
  getUserScreen()
  {
    return this.user;
  }

  //this method is use to return all details about the question one
  getquestion1details()
  {
    return this.question_1;
  }

  //this method is use to return all details about the question two
  getquestion2details()
  {
    return this.question_2;
  }

  //this method is use to return all details about the question three
  getquestion3details()
  {
    return this.question_3;
  }

  //this method is use to return all details about the question four
  getquestion4details()
  {
    return this.question_4;
  }


  /*  ------- Facilitator -------*/
  // this method returns the facilitator screen specific data
  // purpose of this method to return the name of screen displayed on facilitator screen's buttons.
  // this method is also used to find out the routing path for each buttons
  getFacScreen()
  {
    return this.fac;
  }

  //this method is use to return all result releted details about the question one
  getrquestion1esultdetails()
  {
    return this.result_1;
  }
  
  //this method is use to return all result releted details about the question one
  getrquestion2esultdetails()
  {
    return this.result_2;
  }

}
