import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewListsComponent } from './view-lists/view-lists.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ViewListsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
