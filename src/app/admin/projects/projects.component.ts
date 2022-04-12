import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { swal, swalMessage } from 'src/app/components/alert';
import { ProjectService } from 'src/app/service/projects/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  project: any = {
    id: 0,
    name: '',
    time_start: '',
    time_end: '',
    description: ''
  }

  projects: any
  isEdit: any = false
  projectForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    time_start: new FormControl('', Validators.required),
    time_end: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  })

  constructor(
    private projectService: ProjectService
  ) {
    console.log(this.project.id);
  }

  ngOnInit(): void {
    this.listproject()
  }

  listproject() {
    this.projectService.getProjects().subscribe(data => {
      this.projects = data
    })
  }

  submit(data: any) {
    if (this.project.id == 0) {
      swalMessage('Do you want to add project?', 'OK', 'Cancel').then((result) => {
        if (result.isConfirmed) {
          this.projectService.createProject(data).subscribe(() => {
            this.listproject()
            swal('Add project', 'You add project successfully !', 'success')
            this.projectForm.reset()
          })
        }
      })
    } else {
      swalMessage('Do you want to save the changes?', 'Save', `Don't save`).then((result) => {
        if (result.isConfirmed) {
          this.projectService.updateProject(this.project.id, data).subscribe(() => {
            this.listproject()
            swal('Update', 'You updated project successfully', 'success')
            location.reload()
          })
        }
      })
    }
  }
  edit(id: string | number) {
    this.isEdit = true
    this.projectService.getProjectById(id).subscribe(data => {
      this.project = data
    })
  }

  delete(id: string | number) {
    swalMessage('Do you want to delete project?', 'OK', `Cancel`).then((result) => {
      if (result.isConfirmed) {
        this.projectService.deleteProject(id).subscribe(data => {
          this.listproject()
          swal('Delete', 'You deleted project successfully', 'success')
        })
      }
    })
  }

}
