import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'app';
  routeRecipe = false;

  ngOnInit() {
    const config = {
      apiKey: "AIzaSyDjTVS4aTBTfPVX-TR1uSVWYJiPROuMEek",
      authDomain: "recipebook-1632a.firebaseapp.com",
      databaseURL: "https://recipebook-1632a.firebaseio.com",
      projectId: "recipebook-1632a",
      storageBucket: "recipebook-1632a.appspot.com",
      messagingSenderId: "631387642962"
    };
    firebase.initializeApp(config);
  }
}
