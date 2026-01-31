import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact-component',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.scss',
})
export class ContactComponent {

  form: any;

    constructor(private fb: FormBuilder) {

  this.form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    message: ['', Validators.required]
  });
    }


  submit() {
    if (this.form.invalid) return;

    // TODO: replace with API / email integration
    console.log('Query submitted:', this.form.value);

    this.form.reset();
  }
}