/**
 * Created by sukumar on 14-10-2017.
 */
import { Component } from '@angular/core';
import { FirebaseServiceService } from '../../app/http/firebase-service.service';
import { Response } from '@angular/http';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})

export class HeaderComponent {
  title: 'Recipe Book';
  constructor(private storeService: FirebaseServiceService) {

  }
  onSaveData() {
    this.storeService.storeAllRecipes()
      .subscribe(
      (response: Response) => {
        console.log(response);
      }
      );
  }
  onFetchData() {
    this.storeService.retrieveAllRecipes();
  }
}
