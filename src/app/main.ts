import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app.module';

if (process.env.ENV === 'release') {
	enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);