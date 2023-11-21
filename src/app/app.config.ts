import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { environment } from '../environments/environment.development';

//plugins -- optional
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

//state
import { PostState } from './components/store/posts.state';

// we import the ngxs modules to the prividers injected on the config
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(NgxsModule.forRoot([PostState], {developmentMode: !environment.production})),
    importProvidersFrom(NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production
    })),
    importProvidersFrom(NgxsLoggerPluginModule.forRoot({
      disabled: environment.production
    }))
  
  ]

};
