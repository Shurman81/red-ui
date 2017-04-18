import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { Button } from '../components/button';
import { RadioButton } from '../components/radio-button';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    Button,
    RadioButton
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
