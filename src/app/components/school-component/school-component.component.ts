import { Component, OnInit } from '@angular/core';
import { SchoolsService } from 'src/app/service/schools/schools.service';
import { SkillsService } from 'src/app/service/skills/skills.service';

@Component({
  selector: 'app-school-component',
  templateUrl: './school-component.component.html',
  styleUrls: ['./school-component.component.css']
})
export class SchoolComponentComponent implements OnInit {
  schools: any
  constructor(
    private schoolService: SchoolsService
  ) { }

  ngOnInit(): void {
    this.schoolService.getSchools().subscribe(data => {
      this.schools = data
      console.log(this.schools);

    })
  }

}
