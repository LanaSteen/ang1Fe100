import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorComponent } from './error/error.component';
import { UserComponent } from './users/users.component';
// import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: "full"},
  { path: 'home', component: MainComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'users', component: UserComponent },
  // { path: 'details/:id', component:DetailsComponent},




  {path: '**', component: ErrorComponent}

];