import { Component } from '@angular/core';
import { Project_3D } from './modellazione3d.model';
import { Projects3DService } from 'src/app/services/projects3-d.service';

@Component({
  selector: 'app-modellazione3d',
  templateUrl: './modellazione3d.component.html',
  styleUrls: ['./modellazione3d.component.scss']
})
export class Modellazione3dComponent {
  projects_3D: Project_3D[] = []

  constructor(private projectsService: Projects3DService) {}

  ngOnInit(): void {
    this.projects_3D = this.projectsService.projects_3D_List;
  }

}
