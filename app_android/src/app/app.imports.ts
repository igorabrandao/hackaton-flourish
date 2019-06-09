// Global state (used for theming)
import { AppState } from './app.global';

// Providers
import { AppSettings } from './app-config';

// Ionic native providers
import { Diagnostic } from '@ionic-native/diagnostic';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

// Directives
import { SlidingDrawer } from '../components/sliding-drawer/sliding-drawer';
import { Autosize } from '../components/autosize/autosize';

// Modules
import { SwingModule } from 'angular2-swing';
import { BrowserModule } from '@angular/platform-browser';

export const MODULES = [
  SwingModule,
  BrowserModule,
];

export const PROVIDERS = [
  AppSettings,
  AppState,

  // Ionic native specific providers
  Diagnostic,
  StatusBar,
  SplashScreen,
  InAppBrowser,
];

export const DIRECTIVES = [
  SlidingDrawer,
  Autosize,
];