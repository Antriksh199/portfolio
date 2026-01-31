import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills-component',
  imports: [CommonModule],
  templateUrl: './skills-component.html',
  styleUrl: './skills-component.scss',
})
export class SkillsComponent {
  skills = [
  {
    category: 'Frontend',
    items: [
      {name: 'Angular', level: 75},
      {name: 'TypeScript', level: 70},
      {name: 'RxJS', level: 70},
      {name: 'Angular Material', level: 70},
    ]
  },
  {
    category: 'Backend',
    items: [
      {name: '.NET Core', level: 80},
      {name: 'Python Django', level: 80},
      {name: 'C#', level: 80},
      {name: 'REST APIs', level: 80},
      {name: 'Microservices', level: 70},
    ]
  },
  {
    category: 'Database, Automation & Testing',
    items: [
      {name: 'Oracle', level: 80},
      {name: 'SQL Server', level: 60},
      {name: 'PLSQL', level: 70},
      {name: 'Selenium Web Driver', level: 70},
      {name: 'Postman', level: 70}
    ]
  },
  {
    category: 'Cloud',
    items: [
      {name: 'AWS API Gateway', level: 75},
      {name: 'AWS EC2', level: 80},
      {name: 'AWS S3', level: 80},
      {name: 'AWS ECS & EKS', level: 70},
      {name: 'AWS Lambda', level: 80},
      {name: 'AWS Cognito', level: 75},
      {name: 'AWS SNS', level: 70},
      {name: 'AWS SQS', level: 80},
      {name: 'AWS SES', level: 80}
    ]
  },
  {
    category: 'DevOps',
    items: [
      {name: 'Docker', level: 70},
      {name: 'Kubernetes', level: 70},
      {name: 'Jenkins', level: 60},
      {name: 'GitHub Actions', level: 75}
    ]
  },
  {
    category: 'Language & Tools',
    items: [
      {name: 'C#', level: 80},
      {name: 'Python', level: 80},
      {name: 'Javascript', level: 80},
      {name: 'Bash', level: 60},
      {name: 'Git', level: 70},
      {name: 'Visual Studio', level: 80},
      {name: 'ServiceNow', level: 80},
      {name: 'JIRA', level: 80}
    ]
  },
];

}
