import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopbarComponent } from './components/topbar/topbar.component';
import {MaterialsModule} from './materials/materials.module';
import { MinimumRequiredFixturesComponent } from './components/minimum-required-fixtures/minimum-required-fixtures.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  exports:[
    
  ],

  declarations: [
    AppComponent,
    TopbarComponent,
    MinimumRequiredFixturesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
