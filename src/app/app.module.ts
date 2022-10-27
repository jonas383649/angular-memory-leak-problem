import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { PageOneComponent } from './page-one/page-one.component';
import {AppRoutingModule} from './app-routing.module';
import {PageTwoComponent} from './page-two/page-two.component';
import {PageThreeComponent} from './page-three/page-three.component';
import {ChildElementComponent} from './child-element/child-element.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildElementComponent,
    PageOneComponent,
    PageTwoComponent,
    PageThreeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
