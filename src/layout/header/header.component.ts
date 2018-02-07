/**
 * Created by sukumar on 14-10-2017.
 */
import { Component } from '@angular/core';
import { FirebaseServiceService } from '../../app/http/firebase-service.service';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})

export class HeaderComponent {
  title: 'Recipe Book';
  constructor(private firebaseService: FirebaseServiceService, private router: Router) {

  }
  onSaveData() {
    this.firebaseService.storeAllRecipes()
      .subscribe(
      (response: Response) => {
        console.log(response);
      }
      );
  }
  onFetchData() {
    this.firebaseService.retrieveAllRecipes();
  }
  onLogOut() {
    this.firebaseService.logout()
      .then(() => {
        this.router.navigate(['/signin']);
      });
  }
}
