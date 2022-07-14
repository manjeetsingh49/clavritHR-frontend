import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserBodyComponent } from './user-body/user-body.component';
import { UserSidebarComponent } from './user-sidebar/user-sidebar.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { PunchComponent } from './punch/punch.component';



@NgModule({
  declarations: [
    UserBodyComponent,
    UserSidebarComponent,
    UserDashboardComponent,
    PunchComponent
  
  ],
  imports: [
    CommonModule,
   

  ],
  exports: [
    UserBodyComponent,
    UserSidebarComponent,
    UserDashboardComponent,
    PunchComponent,
  ]
})
export class UserDashboardModule { }
