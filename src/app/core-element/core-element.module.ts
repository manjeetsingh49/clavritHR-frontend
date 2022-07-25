import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { AboutComponent } from './about/about.component';
import { UserDashboardModule } from '../user-dashboard/user-dashboard.module';
import { PeopleComponent } from './people/people.component';
import { MyinfoComponent } from './myinfo/myinfo.component';
<<<<<<< HEAD
import { HiringComponent } from './hiring/hiring.component';
=======
import { LoginModule } from '../login/login.module';
>>>>>>> b29dc75f24bd4d0af1ba18d749c4881d19046137

@NgModule({
  declarations: [
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    PeopleComponent,
    MyinfoComponent,
<<<<<<< HEAD
    HiringComponent,
=======
  
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    UserDashboardModule,
    LoginModule
    

>>>>>>> b29dc75f24bd4d0af1ba18d749c4881d19046137
  ],
  imports: [CommonModule, AppRoutingModule, UserDashboardModule],
  exports: [
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    PeopleComponent,
    MyinfoComponent,
    HiringComponent,
  ],
})
export class CoreElementModule {}
