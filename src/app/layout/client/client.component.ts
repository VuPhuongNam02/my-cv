import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/service/profile/profile.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

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
