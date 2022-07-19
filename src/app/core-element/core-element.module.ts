import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { AboutComponent } from './about/about.component';
import { UserDashboardModule } from '../user-dashboard/user-dashboard.module';
import { PeopleComponent } from './people/people.component';
import { MyinfoComponent } from './myinfo/myinfo.component';
import { LoginModule } from '../login/login.module';

@NgModule({
  declarations: [
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    PeopleComponent,
    MyinfoComponent,
  
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    UserDashboardModule,
    LoginModule
    

  ],
  exports: [
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    PeopleComponent,
    MyinfoComponent
  ]
})
export class CoreElementModule { }
