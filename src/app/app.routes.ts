import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header-component/header-component';
import { FooterComponent } from './components/footer-component/footer-component';
import { AboutComponent } from './components/about-component/about-component';
import { SkillsComponent } from './components/skills-component/skills-component';
import { ContactComponent } from './components/contact-component/contact-component';
import { ExperienceComponent } from './components/experience-component/experience-component';
import { ProjectsComponent } from './components/projects-component/projects-component';
import { ContactMe } from './components/contact-me/contact-me';

export const routes: Routes = [
    {path:'header', component: HeaderComponent},
    {path: 'about', component: AboutComponent},
    {path: 'experience', component: ExperienceComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'skills', component: SkillsComponent},
    {path: 'contact', component: ContactComponent },
    {path: 'contactme', component: ContactMe},
    {path: 'footer', component: FooterComponent},
];
