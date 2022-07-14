import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreElementModule } from './core-element/core-element.module';
import { LoginModule } from './login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { UserDashboardModule } from './user-dashboard/user-dashboard.module';
import { LeaveModule } from './leave/leave.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    CoreElementModule,
    HttpClientModule,
    UserDashboardModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
