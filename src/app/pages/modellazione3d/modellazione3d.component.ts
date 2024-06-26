import { Component } from '@angular/core';
import { Progetto_3D } from './projects3D.model';
import { Projects3dService } from 'src/app/services/projects-3d.service';

@Component({
  selector: 'app-modellazione3d',
  templateUrl: './modellazione3d.component.html',
  styleUrls: ['./modellazione3d.component.scss']
})
export class Modellazione3dComponent {

  progetti_3d: Progetto_3D[];

  constructor(private project3dService: Projects3dService) {
    this.progetti_3d = this.project3dService.progetti3d;
  }
}
