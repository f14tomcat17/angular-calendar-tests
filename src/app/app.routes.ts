import { Routes } from '@angular/router';
import { FullCalendarSampleComponent } from './samples/fullcalendar/fullcalendar.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'fullcalendar'
  },
  {
    path: 'fullcalendar',
    component: FullCalendarSampleComponent,
  },
];
