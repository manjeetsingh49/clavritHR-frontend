import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { AboutComponent } from './about/about.component';
import { UserDashboardModule } from '../user-dashboard/user-dashboard.module';
import { PeopleComponent } from './people/people.component';


@NgModule({
  declarations: [
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    PeopleComponent

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    UserDashboardModule

  ],
  exports: [
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    PeopleComponent
  ]
})
export class CoreElementModule { }
