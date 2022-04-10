import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProfileService } from 'src/app/service/profile/profile.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  isEdit = false
  profile: any
  profileForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    avatar: new FormControl(''),
    birthday: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    facebook: new FormControl(''),
    desiredJob: new FormControl(''),
    description: new FormControl(''),
  })

  constructor(private profileService: ProfileService) {
    this.profileForm.disable()
  }

  ngOnInit(): void {
    this.getProfileCurrent()
  }

  getProfileCurrent() {
    this.profileService.getProfile().subscribe(data => {
      this.profile = data
    })
  }

  submit(profile: any) {
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.profileService.updateProfile(profile).subscribe(() => {
          this.getProfileCurrent()
          Swal.fire('Update', 'You updated successfully', 'success')
        })
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

  unDisabled(click: string) {
    this.profileForm.enable()
    this.isEdit = true
  }

  handleCancel(cancel: string) {
    this.isEdit = !this.isEdit
    this.profileForm.disable()
  }
}
