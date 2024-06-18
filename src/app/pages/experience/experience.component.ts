import { Component, OnInit } from '@angular/core';
import { Experience } from './experience.model';
import { ExperiencesService } from 'src/app/services/experiences.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = []

  constructor(private experiencesList: ExperiencesService) {}

  ngOnInit(): void {
    this.experiences = this.experiencesList.experiences;
  }

}
