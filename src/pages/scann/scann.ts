import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BcodeProvider} from '../../providers/bcode-provider';
import { Platform } from 'ionic-angular';
import {InAppBrowser } from '@ionic-native/in-app-browser';


@Component({
  selector: 'page-scann',
  templateUrl: 'scann.html'
})

export class ScannPage {
	private barcodeData;
	data = [];
	barcode:string;
	foundIt:boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dataservice: BcodeProvider,
    public platform: Platform,
    private iab: InAppBrowser) {
  	 this.barcodeData = this.navParams.get('details');
  	 this.barcode = this.barcodeData.text;

  }

  //make sure barcode is at least 13 characters log
  getBarcode(){
    console.log("Scanned Barcode: " + this.barcode);
    console.log("Barcode length: " + this.barcode.length);
    if(this.barcode.length < 13){
      this.barcode = '0' + this.barcode;
    }
    console.log("Barcode length after if: " + this.barcode.length);
    console.log("Scanned Barcode: " + this.barcode);
    return this.barcode;
  }
  launchUrl(url){
    this.platform.ready().then(() => {
      this.iab.create( url, "_system","location=yes" );
    })
  }
  ngOnInit(){

    this.dataservice.getData().then((data) => {
      for(let i = 0; i < data.length; i++){
        if(data[i].fields.gtin_cd === "57063002003"){
          this.foundIt = true;
           console.log("Product gtin_cd: " + data[i].fields.gtin_cd);
          console.log("Brand Name: " + data[i].fields.brand_nm);
          console.log("Brand Image: " + data[i].fields.brand_img);
          console.log("Brand Link: " + data[i].fields.brand_link);
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
          //this.foundIt = true;
        }
        console.log(data[i]);
      }
    });
    this.getBarcode();
  }







}
