import { Component, OnInit } from '@angular/core';
import { LeaveService } from 'src/app/service/leave.service';

@Component({
  selector: 'app-leave',
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
  constructor(private leaveService: LeaveService) { }
  ngOnInit(): void {
  }

  sendRequest(message: string, hour: string) {
    const body = { 'message': message, 'hour': hour };
    console.log("message: " + message + ", hour: " + hour);
    var code;
    this.response = this.leaveService.sendLeaveRequest(body).subscribe(resp => {
      console.log(resp);
      code = resp.code;
      this.response = resp;
      console.log("code : " + code)
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
}

