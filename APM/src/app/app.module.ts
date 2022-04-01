import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent, TestComponent]
})
export class AppModule { }
