import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { CounterModule } from './counter/counter.module';

import { DbzModule } from './dbz/dbz.module';
import { ListComponent } from './dbz/components/list/list.component';




@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    CounterModule,
    DbzModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
