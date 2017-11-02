import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar/calendar.component';
import { DocComponent } from './doc/doc.component';
import { NotebookComponent } from './notebook/notebook.component';
import { SearchComponent } from './search/search.component';
import { DonateComponent } from './donate/donate.component';
import { ContactComponent } from './contact/contact.component';
import { SiteRoutingModule } from './site-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SiteRoutingModule
  ],
  declarations: [CalendarComponent, DocComponent, NotebookComponent, SearchComponent, DonateComponent, ContactComponent]
})
export class SiteModule { }
