import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProfileService } from 'src/app/service/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup
  profile: any

  constructor(private profileService: ProfileService) {
    this.profileForm = new FormGroup({
      name: new FormControl(''),
      avatar: new FormControl(''),
      birthday: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      facebook: new FormControl(''),
      desiredJob: new FormControl(''),
      description: new FormControl(''),
    })
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
    this.profileService.updateProfile(profile).subscribe(() => {
      this.getProfileCurrent()
    })
  }

}
