import { Component, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = {
    username: '',
    email: '',
    password: '',
    state: ''
  }
  submitted = false;
  @ViewChild('f')sginUpForm: NgForm;
  // suggestUserName() {
  //   const suggestedName = 'Superuser';
  // }

  onSubmit(){
    this.submitted = true;
    this.user.username = this.sginUpForm.value.postData.username;
    this.user.email = this.sginUpForm.value.postData.email;
    this.user.password = this.sginUpForm.value.postData.password;
    this.user.state = this.sginUpForm.value.postData.state;

  };
}
