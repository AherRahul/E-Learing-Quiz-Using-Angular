import { Component, OnInit } from '@angular/core';

import { ScreenService } from '../screen.service';

@Component({
  selector: 'app-gd-facilitator',
  templateUrl: './gd-facilitator.component.html',
  styleUrls: ['./gd-facilitator.component.css']
})
export class GdFacilitatorComponent implements OnInit {
  
  count : number = 0;
  screens: any;
  fac_screen : any;

  constructor(private screenservice : ScreenService) { }

  ngOnInit() {
    this.fac_screen = this.screenservice.getFacScreen();
    console.log(this.fac_screen);
  }


}
