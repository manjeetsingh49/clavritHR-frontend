import { Component, OnInit } from '@angular/core';
import { provideRoutes } from '@angular/router';
import { ReportService } from '../report.service';


@Component({
  selector: 'app-attendence-report',
  templateUrl: './attendence-report.component.html',
  styleUrls: ['./attendence-report.component.css'],
  providers: [ReportService]
})
export class AttendenceReportComponent implements OnInit {

  public from: string = "";
  public to: string = "";

  

  constructor(private reportservuce: ReportService) { }

  ngOnInit(): void {

  }


 upload(this: any) {
    if(!this.from || this.to =="") {
      alert("Please add all details");
      return;
  }
}
}