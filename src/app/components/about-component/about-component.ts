import { Component } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-about-component',
  imports: [RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './about-component.html',
  styleUrl: './about-component.scss',
})
export class AboutComponent {

  constructor(private router: Router){}

goToContact()
{
  const element = document.getElementById('contact-info');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

downloadResume() {
  const link = document.createElement('a');
  link.href = 'resume.pdf';   // path to your file
  link.download = 'Antriksh_Resume.pdf';
  link.click();
}


}
