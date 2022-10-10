import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './ui-components/navbar/navbar.component';
import {FormsModule} from "@angular/forms";
import { UserProfileComponent } from './ui-components/user-profile/user-profile.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarComponent } from './ui-components/search-bar/search-bar.component';
import { LogoHomeComponent } from './ui-components/logo-home/logo-home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserProfileComponent,
    SearchBarComponent,
    LogoHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
