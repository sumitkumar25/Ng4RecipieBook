import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FirebaseServiceService } from '../../http/firebase-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  constructor(private firebaseService: FirebaseServiceService, private router: Router) { }
  errors = [];
  messages = [];
  ngOnInit() {
  }
  onSignIn(signInForm: HTMLFormElement) {
    const email = signInForm.value.email;
    const pass = signInForm.value.password;
    this.firebaseService.login(email, pass)
      .then((response) => {
        console.log(response);
        console.log('signInSuccess');
        this.firebaseService.setUserCredentials()
          .then((authToken) => {
            this.firebaseService.authToken = authToken;
            this.router.navigate(['/recipes']);
          })
          .catch((err) => {
            console.log('error setting user credentials');
            console.log(err);
          });
      })
      .catch((error) => {
        this.messages = [];
        this.errors.push(error.message);
      });
  }
  registerNewUser() {
    this.router.navigate(['/signup']);
  }
}
