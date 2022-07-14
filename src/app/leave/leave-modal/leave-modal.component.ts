import { Component, OnInit } from '@angular/core';
import { LeaveService } from 'src/app/service/leave.service';

@Component({
  selector: 'leave-modal',
  templateUrl: './leave-modal.component.html',
  styleUrls: ['./leave-modal.component.css'],
  providers: [LeaveService]
})
export class LeaveModalComponent implements OnInit {
  response: any;
  msg: string = "";
  closeResult = '';
  public diffDays: any;
  public from: string = "";
  public to: string = "";
  public dtErr: string = "";
  public message:string = "";
  public leaveType : any = [
    {"value":"sickLeave", "display" : "Sick Leave"},
    {"value":"vacation", "display" : "Vacation"},
    {"value":"covid", "display" : "Covid"},
  ]
  public seletecLeaveType: string = "Leave Type"

  constructor(private leaveService: LeaveService) { }
  ngOnInit(): void {
  }

  sendRequest() {

    if(!this.diffDays || this.seletecLeaveType === "Leave Type" || this.message === "") {
     alert("Please add all details");
     return;
    }

    const body = {
       'days': this.diffDays,
       'leaveType' : this.seletecLeaveType,
       'message': this.message
      };  
    var code;
    this.response = this.leaveService.sendLeaveRequest(body).subscribe(resp => {
      console.log(resp);
      code = resp.code;
      this.response = resp;
      console.log("code : " + code)
      alert("Successfully submitted");
    });
  }

  public dateDiff() {
    if(this.to && this.from) {
      let toDt = new Date(this.to);
      let frDt = new Date(this.from);
      this.diffDays = toDt.getDate() - frDt.getDate();
      this.dtErr = "";
    } else {
      this.dtErr = "Please select both the dates";
    }
  }

  public clear() {
    this.diffDays = "";
    this.from = "";
    this.to = "";
    this.dtErr = "";
    this.seletecLeaveType = "Leave Type";
    this.message = "";
  }
}

