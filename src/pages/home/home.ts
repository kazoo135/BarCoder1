import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Platform } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ScannPage } from '../scann/scann';
import { BcodeProvider} from '../../providers/bcode-provider';
import {InAppBrowser } from '@ionic-native/in-app-browser';



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
    public dataService:BcodeProvider,
     private iab : InAppBrowser )
  {
  		this.navcontroller = navCtrl;


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

  launchUrl(url){
    this.platform.ready().then(() => {
        this.iab.create( url, "_system","location=yes" );
    })
  }


  ngOnInit(){
    this.dataService.getData().then((data) => {
      for(let i = 0; i < 10; i++){
        if(data[i].fields.gtin_cd === "0033383001531"){
          // console.log("Product gtin_cd: " + data[i].fields.gtin_cd);
          // console.log("Brand Name: " + data[i].fields.brand_nm);
          // console.log("Brand Image: " + data[i].fields.brand_img);
          // console.log("Brand Link: " + data[i].fields.brand_link);
          this.data =[
            {
              gtin: data[i].fields.gtin_cd,
              brandname: data[i].fields.brand_nm,
              gtin_nm:data[i].fields.gtin_nm,
              img: data[i].fields.brand_img,
              link: data[i].fields.brand_link,
              cal: data[i].fields.cal,
              cal_from_fat: data[i].fields.cal_from_fat,
              ingredients: data[i].fields.ingredients,
              protein: data[i].fields.protein_g,
              sugars: data[i].fields.sugars_g,
              vitamin_a: data[i].fields.vitamin_a,
              vitamin_c: data[i].fields.vitamin_c
            }
          ]
        }
        console.log(data[i]);
      }

    });
}

}
