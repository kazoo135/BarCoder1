import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import {ViewChild} from '@angular/core';
import {Slides} from 'ionic-angular';



@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})
export class IntroPage {

  @ViewChild('slides')slides:Slides;
  //TODO add an image arry to be used at top of page
  imgArray = [{
    title: 'Fresh Vegetables',
    source: 'assets/images/foods.png',
    alt: 'Image of Fresh Vegetables'
  },
    {
      title: 'General Products',
      source: 'assets/images/products1.png',
      alt: 'Image of various food products on store shelves'
    },
    {
      title: 'More Products',
      source: 'assets/images/product2.png',
      alt: 'Image of collection of Food Products'

    },
    {
      title: 'Healthy Sancks',
      source: 'assets/images/products3.png',
      alt: 'Image of Healthy Snacks'
    }
  ]


  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntroPage');
  }
  //next slide
  next(){
    this.slides.slideNext();
  }

  //previous slide
  prev(){
    this.slides.slidePrev();
  }
}
