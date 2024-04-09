import { Component, Input } from '@angular/core';
import { Project } from 'src/app/pages/projects/project.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() progetto: Project = new Project('', '', '');
}
