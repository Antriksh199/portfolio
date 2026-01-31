import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header-component/header-component';
import { FooterComponent } from './components/footer-component/footer-component';
import { ExperienceComponent } from './components/experience-component/experience-component';
import { SkillsComponent } from './components/skills-component/skills-component';
import { AboutComponent } from './components/about-component/about-component';
import { ProjectsComponent } from './components/projects-component/projects-component';
import { ContactComponent } from './components/contact-component/contact-component';
import { ContactMe } from './components/contact-me/contact-me';



@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterModule,
    ContactMe, FooterComponent, ExperienceComponent, SkillsComponent, AboutComponent, ProjectsComponent, ContactComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('resume');
}
