import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule }    from '@angular/common/http';
import {AgmCoreModule} from '@agm/core'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD6Bt-OCXCv-MfxSmsmwjGE5NC74bmMcT0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
