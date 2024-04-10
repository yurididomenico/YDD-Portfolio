import { Component, } from '@angular/core';
import { Project } from './project.model';
import { ProjectServiceService } from 'src/app/services/project-service.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  progetti: Project[];

  constructor(private projectService: ProjectServiceService) {
    this.progetti = this.projectService.progetti;
  }
}





