import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { swal, swalMessage } from 'src/app/components/alert';
import { SchoolsService } from 'src/app/service/schools/schools.service';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {

  school: any = {
    id: 0,
    name: '',
    time_start: '',
    time_end: '',
    achievement: ''
  }

  schools: any
  isEdit: any = false
  schoolForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    time_start: new FormControl('', Validators.required),
    time_end: new FormControl('', Validators.required),
    achievement: new FormControl('', Validators.required),
  })

  constructor(
    private schoolService: SchoolsService
  ) {
    console.log(this.school.id);
  }

  ngOnInit(): void {
    this.listschool()
  }

  listschool() {
    this.schoolService.getSchools().subscribe(data => {
      this.schools = data
    })
  }

  submit(data: any) {
    if (this.school.id == 0) {
      swalMessage('Do you want to add school?', 'OK', 'Cancel').then((result) => {
        if (result.isConfirmed) {
          this.schoolService.createSchool(data).subscribe(() => {
            this.listschool()
            swal('Add school', 'You add school successfully !', 'success')
            this.schoolForm.reset()
          })
        }
      })
    } else {
      swalMessage('Do you want to save the changes?', 'Save', `Don't save`).then((result) => {
        if (result.isConfirmed) {
          this.schoolService.updateSchool(this.school.id, data).subscribe(() => {
            this.listschool()
            swal('Update', 'You updated school successfully', 'success')
            location.reload()
          })
        }
      })
    }
  }
  edit(id: string | number) {
    this.isEdit = true
    this.schoolService.getSchoolById(id).subscribe(data => {
      this.school = data
    })
  }

  delete(id: string | number) {
    swalMessage('Do you want to delete school?', 'OK', `Cancel`).then((result) => {
      if (result.isConfirmed) {
        this.schoolService.deleteSchool(id).subscribe(data => {
          this.listschool()
          swal('Delete', 'You deleted school successfully', 'success')
        })
      }
    })
  }
}
