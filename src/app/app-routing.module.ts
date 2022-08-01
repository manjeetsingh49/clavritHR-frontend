import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core-element/home/home.component';
import { LeaveComponent } from './leave/leave/leave.component';
import { LoginComponent } from './login/login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard/user-dashboard.component';
import { AboutComponent } from './core-element/about/about.component';
import { PeopleComponent } from './core-element/people/people.component';
import { MyInfoComponent } from './core-element/myinfo/myinfo.component';
import { HiringComponent } from './core-element/hiring/hiring.component';


import { EmployeeprofileModalComponent } from './employeeprofile-modal/employeeprofile-modal.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'hrms', component: LoginComponent },
  { path: 'leave', component: LeaveComponent },
  { path: 'user-dashboard', component: UserDashboardComponent },
  { path: 'about', component: AboutComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'MyInfo', component: MyInfoComponent },
  { path: 'hiring', component: HiringComponent },
  { path : 'employee-profile', component:EmployeeprofileModalComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
