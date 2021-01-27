import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { DisplayListComponent } from './displaylist/displaylist.component';

import { DirectiveComponent } from './directive/directive.component';
import { ItemDirective } from './directives/item.directive';            // Added this  for ngmodule to work
import { ItemComponent } from './item/item.component';

import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: '', component: HomeComponent },              // Added this
  { path: '', component: DisplayListComponent },           // Added this
  { path: '', component: DirectiveComponent },           // Added this
  { path: 'Catalogue', component: DisplayListComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DisplayListComponent,
    DirectiveComponent,
    ItemDirective,
    ItemComponent
   
  ],
  imports: [
    BrowserModule,
    [RouterModule.forRoot(routes)], 
    FormsModule,                      // Added this
    HttpClientModule,
    
  ],
  exports: [RouterModule],                               // Added this
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
