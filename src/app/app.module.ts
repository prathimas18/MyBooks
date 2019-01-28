import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { WorkComponent } from './work/work.component';
import { EventComponent } from './event/event.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './event/register/register.component';
import { HttpClientModule } from '@angular/common/http';

import { Routes } from '@angular/router';
import { SplitTextPipe } from './split-text.pipe';
import { DataService } from './data.service';


@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    WorkComponent,
    EventComponent,
    HeaderComponent,
    RegisterComponent,
    SplitTextPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
