import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact-component',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.scss',
})
export class ContactComponent {

  form: any;

    constructor(private fb: FormBuilder) {

  this.form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50),Validators.pattern(/^[a-zA-Z\s'-]+$/)] ],
    email: ['', [Validators.required, Validators.email, Validators.minLength(6), Validators.maxLength(20)]],
    phone: ['', [Validators.required, Validators.pattern(/^\+?[0-9]{10}$/)]],
    message: ['', [Validators.required, Validators.minLength(10),Validators.maxLength(1000)]]
  });
    }


  submit() {
   if (this.form.invalid) {
    console.log(this.form);
    this.form.markAllAsTouched();
    return;}
  

    // TODO: replace with API / email integration
    console.log('Query submitted:', this.form.value);

    this.form.reset();
   }
  }
