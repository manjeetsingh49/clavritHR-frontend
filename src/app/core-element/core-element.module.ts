import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    NavigationComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NavigationComponent,
    HomeComponent,
    AboutComponent
  ]
})
export class CoreElementModule { }
