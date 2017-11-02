import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { CalendarComponent } from './calendar/calendar.component';
import { DocComponent } from './doc/doc.component';
import { DonateComponent } from './donate/donate.component';
import { NotebookComponent } from './notebook/notebook.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', redirectTo: 'doc', pathMatch: 'full' },
  { path: 'calendar', component: CalendarComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'doc', component: DocComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'notebook', component: NotebookComponent },
  { path: 'search', component: SearchComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiteRoutingModule { }


