import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './layout/admin/admin.component';
import { ClientComponent } from './layout/client/client.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { SkillsComponent } from './admin/skills/skills.component';
import { ProjectsComponent } from './admin/projects/projects.component';
import { SchoolsComponent } from './admin/schools/schools.component';
import { MainComponent } from './screen/main/main.component';
import { HttpClientModule } from '@angular/common/http'
import { ProfileService } from './service/profile/profile.service';
import { SkillsService } from './service/skills/skills.service';
import { SchoolsService } from './service/schools/schools.service';
import { ProjectService } from './service/projects/project.service';
import { ProfileComponentComponent } from './components/profile-component/profile-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableListComponent } from './components/table-list/table-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    ClientComponent,
    ProfileComponent,
    SkillsComponent,
    ProjectsComponent,
    SchoolsComponent,
    MainComponent,
    ProfileComponentComponent,
    TableListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ProfileService, SkillsService, SchoolsService, ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
