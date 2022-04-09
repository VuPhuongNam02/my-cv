import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/service/profile/profile.service';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.css']
})
export class ProfileComponentComponent implements OnInit {

  profile: any
  constructor(
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.profileService.getProfile().subscribe(data => {
      this.profile = data
    })
  }

}
