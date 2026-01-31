import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience-component',
  imports: [CommonModule],
  templateUrl: './experience-component.html',
  styleUrl: './experience-component.scss',
})
export class ExperienceComponent {
  jobs = [{
    role:'Web Developer & Support',
    company:'Tata Consultancy Services',
    startDate:'Nov-2020',
    endDate: null,
    points:[
      "Developed, enhanced, and supported customer web applications in the Life Sciences domain using Angular, .NET, Python (Django), and Oracle Database.",
      "Implemented CI/CD pipelines with GitHub Actions and Docker, deploying applications to Kubernetes clusters (Amazon EKS) via Azure Pipelines.",
      "Automated manual user management tasks using Selenium WebDriver, reducing operational overhead & IT Effort reduction by 40%.",
      "Designed and deployed RESTful APIs within a Microservices Architecture, integrating Load Balancer and API Gateway with OAuth 2.0 authentication via AWS Cognito.",
      "Integrated applications with AWS S3 and Lambda for file storage, uploads, and processing workflows.",
      "Served in a customer-facing role, participating in Agile ceremonies and managing support activities through ServiceNow ITSM.",
    ],
    techUsed: "Angular, .NET Core, Python (Django), Oracle Database, AWS (EKS, S3, Lambda, Cognito), Microservices, REST API, Docker, GitHub Actions, Azure Pipelines, Selenium, DevOps, ServiceNow"
  }];

}
