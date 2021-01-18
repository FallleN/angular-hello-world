import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TreinoModule } from './treino/treino.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TreinoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
