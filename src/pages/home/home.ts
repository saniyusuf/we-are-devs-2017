import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public characterList = data;

  constructor(public navCtrl: NavController) {

  }

}

const data = [
    {
        "id": "1",
        "name": "Jake Sully",
        "image": "https://vignette3.wikia.nocookie.net/jamescameronsavatar/images/e/e6/Humansully.jpg/revision/latest?cb=20140829010952"
    },
    {
        "id": "2",
        "name": "Neytiri",
        "image": "https://vignette1.wikia.nocookie.net/jamescameronsavatar/images/a/ab/Neytiri_nazachema.jpg/revision/latest?cb=20100501195742"
    },
    {
        "id": "3",
        "name": "Tsu'tey",
        "image": "http://vignette1.wikia.nocookie.net/jamescameronsavatar/images/3/3d/Tsutey.jpg/revision/latest?cb=20100818212805"
    },
    {
        "id": "4",
        "name": "Mo'at",
        "image": "https://vignette3.wikia.nocookie.net/jamescameronsavatar/images/7/7c/Moatcrying.jpg/revision/latest?cb=20100422224751"
    },
    {
        "id": "5",
        "name": "Eytukan",
        "image": "https://vignette2.wikia.nocookie.net/jamescameronsavatar/images/e/eb/Eytukan_Infobox.jpg/revision/latest?cb=20100904030110"
    },
     {
        "id": "6",
        "name": "Toruk Makto",
        "image": "https://vignette2.wikia.nocookie.net/jamescameronsavatar/images/6/65/Torukmakto.jpg/revision/latest?cb=20100506204113"
    },
    {
        "id": "7",
        "name": "Dr. Grace Augustine",
        "image": "https://vignette2.wikia.nocookie.net/jamescameronsavatar/images/1/1d/Grace_with_headphones.jpg/revision/latest?cb=20100112235059"
    },
    {
        "id": "8",
        "name": "Dr. Norm Spellman",
        "image": "https://vignette2.wikia.nocookie.net/jamescameronsavatar/images/1/12/Spellman.png/revision/latest?cb=20091106175915"
    },
    {
        "id": "9",
        "name": "Trudy Chacon",
        "image": "https://s-media-cache-ak0.pinimg.com/736x/50/23/19/502319815769920b2723f534d49c0b99.jpg"
    },
    {
        "id": "10",
        "name": "Miles Quaritch",
        "image": "https://vignette2.wikia.nocookie.net/jamescameronsavatar/images/2/28/15yiy53.jpg/revision/latest?cb=20090928125121"
    }

];
