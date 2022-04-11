import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SkillsService } from 'src/app/service/skills/skills.service';
import { swal, swalMessage } from 'src/app/components/alert';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skill: any = {
    id: 0,
    name: '',
    point: '',
    image: ''
  }

  skills: any
  isEdit: any = false
  skillForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    point: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
  })

  constructor(
    private skillService: SkillsService
  ) {
    console.log(this.skill.id);
  }

  ngOnInit(): void {
    this.listSkill()
  }

  listSkill() {
    this.skillService.getSkills().subscribe(data => {
      this.skills = data
    })
  }

  submit(data: any) {
    if (this.skill.id == 0) {
      swalMessage('Do you want to add skill?', 'OK', 'Cancel').then((result) => {
        if (result.isConfirmed) {
          this.skillService.createSkill(data).subscribe(() => {
            this.listSkill()
            swal('Add skill', 'You add skill successfully !', 'success')
            this.skillForm.reset()
          })
        }
      })
    } else {
      swalMessage('Do you want to save the changes?', 'Save', `Don't save`).then((result) => {
        if (result.isConfirmed) {
          this.skillService.updateSkill(this.skill.id, data).subscribe(() => {
            this.listSkill()
            swal('Update', 'You updated skill successfully', 'success')
            location.reload()
          })
        }
      })
    }
  }
  edit(id: string | number) {
    this.isEdit = true
    this.skillService.getSkillById(id).subscribe(data => {
      this.skill = data
    })
  }

  delete(id: string | number) {
    swalMessage('Do you want to delete skill?', 'OK', `Cancel`).then((result) => {
      if (result.isConfirmed) {
        this.skillService.deleteSkill(id).subscribe(data => {
          this.listSkill()
          swal('Delete', 'You deleted skill successfully', 'success')
        })
      }
    })
  }

}


