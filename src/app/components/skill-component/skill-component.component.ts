import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'src/app/service/skills/skills.service';

@Component({
  selector: 'app-skill-component',
  templateUrl: './skill-component.component.html',
  styleUrls: ['./skill-component.component.css']
})
export class SkillComponentComponent implements OnInit {

  skills: any
  constructor(private skillService: SkillsService) { }

  ngOnInit(): void {
    this.skillService.getSkills().subscribe(data => {
      this.skills = data
      console.log(this.skills);

    })
  }
}
