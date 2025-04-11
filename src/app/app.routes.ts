import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorComponent } from './error/error.component';
import { UserComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { ApiCardsComponent } from './apicards/apicards.component';
import { ApiDetailsComponent } from './api-details/api-details.component';



export const routes: Routes = [
  
  {path: '', redirectTo: 'home', pathMatch: "full"},
  { 
    path: 'home',
    loadComponent:() => import ('./main/main.component').then(m => m.MainComponent)
  },
  { 
    path: 'profile',
    loadComponent:() => import ('./profile/profile.component').then(m => m.ProfileComponent)

   },
  { 
    path: 'users',
    loadComponent:() => import ('./users/users.component').then(m => m.UserComponent)
   },
  { 
    path: 'details/:id',
    loadComponent:() => import ('./details/details.component').then(m => m.DetailsComponent)
  },
  { 
    path: 'apiCard',
    loadComponent:() => import ('./apicards/apicards.component').then(m => m.ApiCardsComponent)
  },
  { 
    path: 'apiDetails/:id',
    loadComponent:() => import ('./api-details/api-details.component').then(m => m.ApiDetailsComponent)
  },




  {path: '**', component: ErrorComponent}

];