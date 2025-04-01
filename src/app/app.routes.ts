import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: "full"},
  { path: 'home', component: MainComponent },
  { path: 'profile', component: ProfileComponent }
];