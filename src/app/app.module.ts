import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TopbarComponent } from './components/topbar/topbar.component';
import {MaterialsModule} from './materials/materials.module';
import { MinimumRequiredFixturesComponent } from './components/minimum-required-fixtures/minimum-required-fixtures.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UnitFixtureComponent } from './components/minimum-required-fixtures/unit-fixture/unit-fixture.component';
import { SettingNumberForUnitsComponent } from './components/minimum-required-fixtures/setting-number-for-units/setting-number-for-units.component';
import { UserInputComponent } from './components/minimum-required-fixtures/setting-number-for-units/user-input/user-input.component';


@NgModule({
  exports:[
    
  ],

  declarations: [
    AppComponent,
    TopbarComponent,
    MinimumRequiredFixturesComponent,
    UnitFixtureComponent,
    SettingNumberForUnitsComponent,
    UserInputComponent,
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
