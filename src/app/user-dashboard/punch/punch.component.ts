import { DATE_PIPE_DEFAULT_TIMEZONE } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {punchIn } from 'src/app/class/punchIn.class';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { PunchService } from 'src/app/service/punch.service';


@Component({
  selector: 'app-punch',
  templateUrl: './punch.component.html',
  styleUrls: ['./punch.component.css']
})
export class PunchComponent implements OnInit {
  authService: any;


  constructor(private punchService: PunchService ,private AuthenticationService: AuthenticationService) {
  }


  punchInTime: any;
  punchOutTime: any;
  punchInClass: punchIn = new punchIn();
  todayAttendance: Array<punchIn> = [];

  ngOnInit(): void {
    this.getTodayAttendance();
  }

  punchINandOut(isPunchIn: boolean) {
    if (isPunchIn) {
       this.punchInTime = new Date();
      this.punchInClass.empId =  this.AuthenticationService.getData(this.AuthenticationService.TOKEN_KEY);
      this.toggle();
      this.punchInClass.punchIn = new Date();
      this.punchInClass.createdOn = new Date();
      this.punchInTime = new Date();
    } else {
      this.punchOutTime = new Date();
      this.punchInClass.punchOut = new Date();
      this.punchInClass.udatedOn = new Date();
      console.log("in punch out condition:: " + this.punchInClass.punchOut);
    }
    this.todayAttendance.push(this.punchInClass);
    this.punchService.punchInOut(this.punchInClass).subscribe(resp => {
      console.log("punchIn: " + resp);
    });

  }

  display = true;
  toggle() {
    this.display = !this.display
  }
  getTodayAttendance() {
    let startDate = new Date();
    startDate.setHours(0, 0, 0, 0);
    let endDate = new Date(startDate.getTime() + 24 * 60 * 60 * 1000);
    console.log("start Date: " + startDate + ", end Date: " + endDate);
    this.punchService.getTodayAttendance(startDate, endDate).subscribe(resp => {
      console.log(resp.data);
      if (resp.data.length > 0) {
        this.todayAttendance.push(resp.data);
        this.punchInClass = resp.data[0];
        console.log("this.punchIn: " + this.punchInClass.punchIn);
        this.punchInTime = resp.data[0].punchIn;
        this.punchOutTime = resp.data[0].punchOut;
        this.display = false;
      }

    });
  }
}
