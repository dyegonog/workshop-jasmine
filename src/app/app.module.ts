import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule, XHRBackend, RequestOptions } from '@angular/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './app.routes';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		routing,
		BrowserAnimationsModule,
	],
	declarations: [
		AppComponent,
		HomeComponent,
		AboutComponent
	],
	providers: [
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}