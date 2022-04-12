import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/service/projects/project.service';

@Component({
  selector: 'app-project-component',
  templateUrl: './project-component.component.html',
  styleUrls: ['./project-component.component.css']
})
export class ProjectComponentComponent implements OnInit {
  projects: any
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(data => {
      this.projects = data
    })
  }

}
