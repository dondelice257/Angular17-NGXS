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
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

// we import the ngxs modules to the prividers injected on the config
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(
      NgxsModule.forRoot([PostState], 
      {developmentMode: !environment.production}),

      //*I added this module to make sure the datas in store are saved even when the user refreshes the page
      //* if you want save other datas on page refreshing please add the state name below in this array
      NgxsStoragePluginModule.forRoot({
        key: [
            'posts',
  
        ],
    }),

    ),
    importProvidersFrom(NgxsReduxDevtoolsPluginModule.forRoot({
      disabled: environment.production
    })),
    importProvidersFrom(NgxsLoggerPluginModule.forRoot({
      disabled: environment.production
    }))
  
  ]

};
