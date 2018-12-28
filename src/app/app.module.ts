import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MyMusicComponent } from './my-music/my-music.component';
import { AboutComponent } from './about/about.component';
import { ContactArchiveComponent } from './contact-archive/contact-archive.component';
import { ContactModalComponent } from './contact-modal/contact-modal.component';
import { BlogArchiveComponent } from './blog-archive/blog-archive.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MyMusicComponent,
    AboutComponent,
    ContactArchiveComponent,
    ContactModalComponent,
    BlogArchiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
