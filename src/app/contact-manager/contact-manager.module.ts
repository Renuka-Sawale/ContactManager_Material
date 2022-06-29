import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavComponent } from './components/sidenav/sidenav.component'; 
import { MainContentComponent } from './components/main-content/main-content.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NotesComponent } from './components/notes/notes.component';

import { UiModule } from '../ui/ui.module';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { DemoModule } from '../demo/demo.module';

@NgModule({
  declarations: [
    SidenavComponent,
    ToolbarComponent,
    MainContentComponent,
    NotesComponent,
  ],
  imports: [
    CommonModule,
    UiModule,
    HttpClientModule,
    DemoModule,
    RouterModule
  ],
  // providers : [
  //   UserService
  // ],
  exports: [
    SidenavComponent,
    ToolbarComponent,
    NotesComponent
  ]
 
})
export class ContactManagerModule { }
