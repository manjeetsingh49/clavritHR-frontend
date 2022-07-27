import { DatePipe } from '@angular/common';
import { HttpClient, HttpUrlEncodingCodec } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { punchIn } from '../class/punchIn.class';

@Injectable({
  providedIn: 'root'
})
export class PunchService {


  apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient, private datePipe: DatePipe) { }


  public punchInOut(punchInClass : punchIn): Observable<any> {
    const fullApiUrl = this.apiUrl + "/attendance";
    console.log("In punchInOUt service "+ punchInClass.punchOut);
    return this.http.post<any>(fullApiUrl, punchInClass);
  }
  public punchout(punchinClass : punchIn): Observable<any> {
    const fullApiUrl = this.apiUrl + "/attendance/startDate/endDate";
    return this.http.get<any>(fullApiUrl);
  }

  public getTodayAttendance(startDate:Date, endDate:Date){
   let startDateF =this.getDateYMDFormat(startDate);
   let endDateF = this.getDateYMDFormat(endDate);
   console.log("startDateF: "+ startDateF);
    const fullApiUrl = this.apiUrl + "/attendance/"+startDateF+"/"+endDateF;
    return this.http.get<any>(fullApiUrl);
  }

  public getDateYMDFormat(date:Date){
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }
}
