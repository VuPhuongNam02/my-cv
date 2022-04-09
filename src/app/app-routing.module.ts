import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './admin/profile/profile.component';
import { ProjectsComponent } from './admin/projects/projects.component';
import { SchoolsComponent } from './admin/schools/schools.component';
import { SkillsComponent } from './admin/skills/skills.component';
import { AdminComponent } from './layout/admin/admin.component';
import { ClientComponent } from './layout/client/client.component';
import { MainComponent } from './screen/main/main.component';

const routes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    children: [
      // {
      //   path: ''
      // },
      {
        path: "skills",
        component: SkillsComponent
      },
      {
        path: "profile",
        component: ProfileComponent
      },
      {
        path: "projects",
        component: ProjectsComponent
      },
      {
        path: "schools",
        component: SchoolsComponent
      }
    ]
  },
  {
    path: "",
    component: ClientComponent,
    children: [{
      path: 'my-cv',
      component: MainComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
