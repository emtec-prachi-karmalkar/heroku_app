import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewListsComponent } from './view-lists/view-lists.component';
import { AddTaskComponent } from './add-task/add-task.component';


const routes: Routes = [
  {path: 'add_task', component:AddTaskComponent},
  {path: 'view_list', component:ViewListsComponent},
  {path: '**', component:ViewListsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
