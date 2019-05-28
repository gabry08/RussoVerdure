import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { InfoverdureComponent } from './infoverdure/infoverdure.component';
import { VegetableListComponent } from './vegetable-list/vegetable-list.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoverdureComponent,
    VegetableListComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,



    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


