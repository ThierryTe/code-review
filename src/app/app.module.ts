import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayProduitComponent } from './display-produit/display-produit.component';
import {HttpClientModule} from '@angular/common/http';
import { ColorChangeDirective } from './shared/color-change.directive';
import { CommonModule } from '@angular/common';
import { ProductDisplayPipe } from './shared/product-display.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DisplayProduitComponent,
    ColorChangeDirective,
    ProductDisplayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
