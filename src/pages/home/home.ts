import {Component, Directive} from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ScannPage } from '../scann/scann';
import { StatusBar } from '@ionic-native/status-bar';
// import { ViewChild } from '@angular/core';
import {IntroPage } from '../intro/intro';
import {componentModuleUrl} from "@angular/compiler";

@Component({
  selector:'intro-page',
  templateUrl: '../intro/intro.html'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {
	private barcodeText: string;
	private barcodeFormat: string;
	private navcontroller: NavController;
  data = [];
  error:any;


  constructor(
    public navCtrl: NavController, public platform:Platform,
    public barcodeScanner: BarcodeScanner,
    private statusBar: StatusBar
    )

  {
  		this.navcontroller = navCtrl;
  }
//  TODO use an ionic hook here instead of ngOnInit()
ngOnInit(){

  if( this.platform.is('android')){
    // let status bar overlay webview
    this.statusBar.overlaysWebView(false);
    this.statusBar.styleLightContent();
    this.statusBar.backgroundColorByHexString('#689F38');
    console.log('Android used here');
  }else{
    // let status bar overlay webview    // let status bar overlay webview
    this.statusBar.overlaysWebView(false);
    // set status bar to some hex color
    this.statusBar.backgroundColorByHexString('#689F38');
  }

}


  doScan(){
  		console.log("Scanning product barcode");
  		this.platform.ready().then(() => {
  		this.barcodeScanner.scan().then((result) => {
  			if(!result.cancelled){
  				this.barcodeText = result.text;
  				this.barcodeFormat = result.format;
  				this.scanDetails({'text':result.text,'format':result.format});
  			}
  		}, (error) => {
  			console.log("Error scanning product barcode");
  		  });
  		});
  }//end of doScan()

//pass barcodeData obj to ScannPage
  scanDetails(details){
  	this.navCtrl.push(ScannPage, {details:details});
  }
  //next slide
  next(){
    this.slides.slideNext();
  }

  //previous slide
  prev(){
    this.slides.slidePrev();
  }

}//End of Class
