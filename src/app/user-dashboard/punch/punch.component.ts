import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-punch',
  templateUrl: './punch.component.html',
  styleUrls: ['./punch.component.css']
})
export class PunchComponent implements OnInit {
  public inputValue : string = "hello";
  public diffDays: any;
  public from: string = "";
  public to: string = "";
  public dtErr: string = "";
  constructor() {
   
   // this.diffDays = this.to.getDate() - this.from.getDate();
  }

  ngOnInit(): void {
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
