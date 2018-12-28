import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { AboutComponent } from './about/about.component';
import { BlogArchiveComponent } from './blogs/blog-archive/blog-archive.component';
import { HomeComponent } from './blogs/home/home.component';
import { MyMusicComponent } from './blogs/my-music/my-music.component';
import { ContactArchiveComponent } from './contact/contact-archive/contact-archive.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},

	{
		path: 'about',
		component: AboutComponent
	},

	{
		path: 'blogarchive',
		component: BlogArchiveComponent
	},

	{
		path: 'mymusic',
		component: MyMusicComponent
	},

	{
		path: 'contactarchive',
		component: ContactArchiveComponent
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
