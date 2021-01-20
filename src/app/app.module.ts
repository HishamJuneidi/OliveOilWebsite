import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { DisplaylistComponent } from './displaylist/displaylist.component';

import { IdemComponent } from './idem/idem.component';
import { DirectiveComponent } from './directive/directive.component';            // Added this  for ngmodule to work


const routes: Routes = [
  { path: '', component: HomeComponent },              // Added this
  { path: '', component: IdemComponent },           // Added this
  { path: '', component: DisplaylistComponent },           // Added this
  { path: '', component: DirectiveComponent }           // Added this
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DisplaylistComponent,
    IdemComponent,
    DirectiveComponent
   
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(routes)], FormsModule                      // Added this
    
  ],
  exports: [RouterModule],                               // Added this
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
