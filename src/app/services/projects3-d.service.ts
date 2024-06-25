import { Injectable } from '@angular/core';
import { Project_3D } from '../pages/modellazione3d/modellazione3d.model';

@Injectable({
  providedIn: 'root'
})
export class Projects3DService {

  projects_3D_List: Project_3D[] = [
    new Project_3D(
      'Titolo progetto 3D - 01',
      `
        Descrizione progetto 3D - 01
      `
    )
  ];

  constructor() { }
}
