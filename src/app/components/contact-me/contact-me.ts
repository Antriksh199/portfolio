import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss',
  imports: [CommonModule]
})
export class ContactMe {

  fullName = 'Antriksh Pandey';
  email = 'antriksh199@gmail.com';
  phone = '+918130907556';

  address = {
    line1: '320, Bargaon',
    city: 'Gonda',
    state: 'Uttar Pradesh',
    country: 'India',
    zip: '271002'
  };

  linkedIn = 'https://www.linkedin.com/in/antriksh-pandey-80689229/';
  github = 'https://github.com/Antriksh199';

  copiedField: string | null = null;

  copyToClipboard(value: string, field: string) {
    navigator.clipboard.writeText(value).then(() => {
      this.copiedField = field;

      setTimeout(() => {
        this.copiedField = null;
      }, 1500);
    }).catch(err => {
      console.error('Failed to copy:', err);
    });
  }
}
