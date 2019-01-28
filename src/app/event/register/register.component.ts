import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  eventForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder) {
    this.eventForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z ]*')
      ]),
      email: new FormControl('', [Validators.required,
      Validators.email]),
      members: new FormControl('', [Validators.pattern('[0-4]{1}')])
    })
  }

  onSubmit() {
    this.submitted = true;

    if (this.eventForm.invalid) {
      return;
    }

    this.success = true;
  }

  ngOnInit() {

  }
}
