import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { MessagingComponent } from '../../common/messaging/messaging.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, AuthRoutingModule
  ],
  declarations: [SigninComponent, SignupComponent, MessagingComponent]
})

export class AuthenticationModule { }
