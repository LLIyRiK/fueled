import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartHeaderComponent } from './components/cart-header/cart-header.component';
import { CartTableComponent } from './components/cart-table/cart-table.component';
import { CartFooterComponent } from './components/cart-footer/cart-footer.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CartHeaderComponent,
    CartTableComponent,
    CartFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
