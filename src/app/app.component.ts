import { Component, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') signupForm: NgForm;
  defaulQuestion = 'teacher';
  answer = '';
  genders = ['male', 'female'];
  submitted: any;
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

//   onSubmit(form: NgForm) {
// console.log(form);
//   }

  onSubmit() {
    this.submitted = true;
    this.user.username =  this.signupForm.value.userData.username;
    this.user.email =  this.signupForm.value.userData.email;
    this.user.secretQuestion =  this.signupForm.value.secret;
    this.user.answer =  this.signupForm.value.QA;
    this.user.gender =  this.signupForm.value.gender;

  }
}
