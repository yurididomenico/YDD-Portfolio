import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { LineComponent } from './components/line/line.component';
import { SocialsComponent } from './components/socials/socials.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './pages/about/about.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { GamesComponent } from './pages/games/games.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    LineComponent,
    SocialsComponent,
    HomepageComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    GamesComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
