import { Component, OnInit } from '@angular/core';
import { FirebaseServiceService } from '../../http/firebase-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errors: string[] = [];
  messages: string[] = [];
  constructor(private firebaseService: FirebaseServiceService, private router: Router) { }

  ngOnInit() {
  }
  onSignUp(signUpForm: HTMLFormElement) {
    const email = signUpForm.value.email;
    const pass = signUpForm.value.password;
    this.firebaseService.createUserWithEmailAndPassword(email, pass)
      .then((response) => {
        this.errors = [];
        this.messages.push('sign-up Success');
        this.messages.push(response.email + 'user created');
        console.log(response);
        this.router.navigate(['/signin']);
      })
      .catch((error) => {
        this.messages = [];
        this.errors.push(error.message);
      });
  }
}
