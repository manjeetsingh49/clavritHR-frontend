import { Component, OnInit } from '@angular/core';
import { LeaveService } from 'src/app/service/leave.service';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css'],
  providers: [LeaveService]
})
export class LeaveComponent implements OnInit {
  response: any;
  msg: string = "";
  closeResult = '';
  public inputValue:String = "hello";
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
}

