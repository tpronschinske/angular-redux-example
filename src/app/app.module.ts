import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';

import { AppComponent } from './app.component';
import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';
import { createLogger } from 'redux-logger';
import { IAppState, InitialState, rootReducer } from './store/store';
import { routing } from './app.routes';
import { CommonModule, APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    routing,
    BrowserModule,
    CommonModule,
    NgReduxModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public ngRedux: NgRedux<IAppState>, public devToolsExtension: DevToolsExtension){
    let enhancers = isDevMode() ? [devToolsExtension.enhancer()] : [];
    let logger = isDevMode() ? [createLogger()] : [];
    ngRedux.configureStore(rootReducer, InitialState, logger, enhancers);
  }
}


