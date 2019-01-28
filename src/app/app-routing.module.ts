import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorComponent } from './author/author.component';
import { WorkComponent } from './work/work.component';
import { EventComponent } from './event/event.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './event/register/register.component';

const routes: Routes = [
  {
    path: "",
    component: AuthorComponent
  },
  {
    path: "books",
    component: WorkComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "events",
    component: EventComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
