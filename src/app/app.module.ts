import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PaginatorModule} from 'primeng/paginator';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from 'src/app/search/search.component';
import { HomeComponent } from 'src/app/home/home.component';
import { PlayComponent } from 'src/app/play/play.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    PlayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PaginatorModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
