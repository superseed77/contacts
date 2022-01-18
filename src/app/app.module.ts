import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersondetailComponent } from './persondetail/persondetail.component';
import { PersonlistComponent } from './personlist/personlist.component';

@NgModule({
  declarations: [
    AppComponent,
    PersondetailComponent,
    PersonlistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
