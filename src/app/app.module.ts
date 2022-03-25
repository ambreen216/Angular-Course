import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import {ChartsModule} from "angular-bootstrap-md";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './components/comp1/comp1.component';
import { Comp2Component } from './components/comp2/comp2.component';
import { Comp3Component } from './components/comp3/comp3.component';
import { Comp4Component } from './components/comp4/comp4.component';
import { LineComponent } from './line/line.component';
import { BarComponent } from './bar/bar.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    LineComponent,
    BarComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgChartsModule,
        ChartsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
