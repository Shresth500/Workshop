import { Routes } from '@angular/router';
import { WorkshopListComponent } from './workshop-list/workshop-list.component';
import { AddWorkshopComponent } from './add-workshop/add-workshop.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HomeComponent } from '../home/home.component';
import { WorkshopsDetailsComponentComponent } from './workshops-details-component/workshops-details-component.component';
import { SessionListComponent } from './workshops-details-component/session-list/session-list.component';
import { AddSessionsComponent } from './workshops-details-component/add-sessions/add-sessions.component';
import { authGuard } from '../common/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [authGuard],
  },
  {
    path: 'workshops',
    component: WorkshopListComponent,
    canActivate: [authGuard],
  },
  {
    path: 'workshops/add',
    component: AddWorkshopComponent,
    canActivate: [authGuard],
  },
  {
    path: 'workshops/favorites',
    component: FavoritesComponent,
    canActivate: [authGuard],
  },
  {
    path: 'workshops/:id',
    component: WorkshopsDetailsComponentComponent,
    title: 'Workshop Details',
    canActivate: [authGuard],
    children: [
      {
        path: '',
        component: SessionListComponent,
      },
      {
        path: 'add-session',
        component: AddSessionsComponent,
      },
    ],
  },
  {
    path: 'workshops/edits/:id',
    component: AddWorkshopComponent,
    title: 'Edit a workshop',
  },
];
