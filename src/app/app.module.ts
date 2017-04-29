import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import {InAppBrowser } from '@ionic-native/in-app-browser';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ScannPage } from '../pages/scann/scann';
import { BcodeProvider } from '../providers/bcode-provider';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ScannPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ScannPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BcodeProvider,
    BarcodeScanner,
    InAppBrowser
  ]
})
export class AppModule {}
