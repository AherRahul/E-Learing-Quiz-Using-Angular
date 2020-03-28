import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../screen.service';


@Component({
  selector: 'app-gd-user',
  templateUrl: './gd-user.component.html',
  styleUrls: ['./gd-user.component.css']
})
export class GdUserComponent implements OnInit {

  count: number = 0;
  user_screen : any;
  screens: any;
  
  constructor(private screenservice : ScreenService) { }

  ngOnInit() {
    this.user_screen = this.screenservice.getUserScreen();
    // this.showConfig(); 
  }

  // showConfig() {
  //   this.screenservice.getScreenName().subscribe(data =>{console.log(data); this.screens = data;})  
  // }
}