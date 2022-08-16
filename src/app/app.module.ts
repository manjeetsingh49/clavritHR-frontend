import { NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreElementModule } from './core-element/core-element.module';
import { LoginModule } from './login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';
import { DatePipe } from '@angular/common';
import { NgxUiLoaderModule,NgxUiLoaderHttpModule}  from 'ngx-ui-loader';
import { AttendenceReportComponent } from './attendence-report/attendence-report.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    AttendenceReportComponent
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    CoreElementModule,
    HttpClientModule,
    UserDashboardModule,
    FormsModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot (
      { 
        showForeground: true, 
        maxTime: 300, 
        minTime: 10 
      }
    )
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }