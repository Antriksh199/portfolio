import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-component',
  imports: [CommonModule],
  templateUrl: './projects-component.html',
  styleUrl: './projects-component.scss',
})
export class ProjectsComponent {
projects=[
  {
    title: 'Multi-Cloud Kubernetes Microservices Platform',
    description: 'A Kubernetes infrastructure which holds and deploys multiple applications under same cluster with different namespaces.',
    linkedIn: 'https://www.linkedin.com/posts/antriksh-pandey-80689229_kubernetes-k3s-cloudnative-activity-7482039775324119040-M0gw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAYA2wYBoN8KMETIzEsyO84D1tusTQWhXIw'
    ,logo: 'linkedIn'
  },
  {title:'MONETARY (FINANCE MANAGEMENT TOOL)',
    description: 'Monetary enables users to add, edit, and delete their incomes, expenditures, and investments,making it simple to track and manage personal finances.',
    github: 'https://github.com/Antriksh199/Monetary',
    logo: 'github'
  },
  {title:'Microblog',
    description: 'This is a web application which allows you to Signup, Login, Create/Edit Blog, Like/Unlike Blog, Follow/Unfollow User.',
    github: 'https://github.com/Antriksh199/Microblog',
    logo: 'github'
  },
  {title:'Portfolio',
    description: 'A Web Application designed, developed and deployed to showcase my portfolio to learn and practise modern DevOps Technologies.',
    github: 'https://github.com/Antriksh199/portfolio',
    logo: 'github'
  }
];
}
