import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BcodeProvider} from '../../providers/bcode-provider'


@Component({
  selector: 'page-scann',
  templateUrl: 'scann.html'
})

export class ScannPage {
	private barcodeData;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public dataservice: BcodeProvider) {
  	 this.barcodeData = this.navParams.get('details');

  	 //  this.dataservice.load().then((data) => {
      // console.log(data);

      // this.description = data.description;
      // this.productname = data.itemname;
      // this.avg_price = data.avg_price;
      // });



  }







}
