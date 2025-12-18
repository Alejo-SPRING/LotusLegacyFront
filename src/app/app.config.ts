import {
  ApplicationConfig,
  inject,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideTransloco, Translation, TranslocoLoader } from '@jsverse/transloco';

export class TranslocoHttpLoader implements TranslocoLoader {
  private http = inject(HttpClient);
  getTranslation(lang: string) {
    return this.http.get<Translation>(`/i18n/${lang}.json`);
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withHashLocation()),
    provideHttpClient(),
    provideTransloco({
      config: {
        availableLangs: ['es', 'en'],
        defaultLang: 'es',
        reRenderOnLangChange: true,
        prodMode: false,
      },
      loader: TranslocoHttpLoader,
    }),
  ],
};
