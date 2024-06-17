import { Component, OnInit } from '@angular/core';
import { AboutDescriptionService } from 'src/app/services/about-description.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  description = "description";
  listLibraries = "listLibraries";
  languages = "languages";

  constructor(private aboutDescription : AboutDescriptionService) {}

  ngOnInit(): void {
    this.description = this.aboutDescription.description;
    this.listLibraries = this.aboutDescription.listLibraries;
    this.languages = this.aboutDescription.languages;
  }



}
