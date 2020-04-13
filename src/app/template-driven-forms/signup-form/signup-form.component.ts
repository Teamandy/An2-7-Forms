import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from './../../models/user.model';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent implements OnInit {
  countries: Array<string> = [
    'Ukraine',
    'Armenia',
    'Belarus',
    'Hungary',
    'Kazakhstan',
    'Poland',
    'Russia',
  ];
  user: UserModel = new UserModel();

  constructor() {}

  ngOnInit() {}

  onSave(signupForm: NgForm) {
    // Form model
    console.log(signupForm.form);
    // Form value
    console.log(`Saved: ${JSON.stringify(signupForm.value)}`);
  }
}
