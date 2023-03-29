import {Routes} from '@angular/router';
import {FirstComponent} from './first.component';
import {SecondComponent} from './second.component';
import {FirstChildAComponent} from './first-child-a.component';
import {FirstChildBComponent} from './first-child-b.component';
import {NotFoundComponent} from './not-found.component';
import {SecondChildAComponent} from './second-child-a/second-child-a.component';

export const routes: Routes = [
  {
    path: 'auth',
    component: FirstComponent,
    children: [
      {
        path: 'login',
        component: FirstChildAComponent
      },
      {
        path: 'register',
        component: FirstChildBComponent
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'second',
    component: SecondComponent,
    children: [
      {
        path: ':slug',
        component: SecondChildAComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
