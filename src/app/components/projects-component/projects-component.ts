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
  {title:'MONETARY (FINANCE MANAGEMENT TOOL)',
    description: 'Monetary enables users to add, edit, and delete their incomes, expenditures, and investments,making it simple to track and manage personal finances.',
    github: 'https://github.com/your-username/portfolio'
  },
  {title:'Microblog',
    description: 'This is a web application which allows you to Signup, Login, Create/Edit Blog, Like/Unlike Blog, Follow/Unfollow User.',
    github: 'https://github.com/your-username/portfolio'
  },
  {title:'Portfolio',
    description: 'A Web Application designed, developed and deployed to showcase my portfolio to learn and practise modern DevOps Technologies.',
    github: 'https://github.com/your-username/portfolio'
  }
];
}
