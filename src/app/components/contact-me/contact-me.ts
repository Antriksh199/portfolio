import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-me',
  imports: [],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.scss',
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


  copyToClipboard(value: string) {
    navigator.clipboard.writeText(value).then(() => {
      alert(`${value} copied to clipboard!`);
    });
  }


}