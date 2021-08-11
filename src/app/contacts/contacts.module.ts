import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ContactsListComponent,
    ContactDetailsComponent,
    MainComponent,
  
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
      HttpClientModule
  ]
})
export class ContactsModule { }
