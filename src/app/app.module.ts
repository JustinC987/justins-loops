import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './blogs/home/home.component';
import { MyMusicComponent } from './blogs/my-music/my-music.component';
import { AboutComponent } from './about/about.component';
import { ContactArchiveComponent } from './contact/contact-archive/contact-archive.component';
import { ContactModalComponent } from './contact/contact-modal/contact-modal.component';
import { BlogArchiveComponent } from './blogs/blog-archive/blog-archive.component';

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
	imports: [ BrowserModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
