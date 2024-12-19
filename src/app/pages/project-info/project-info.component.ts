import { Component,OnInit } from '@angular/core';
import { Button3dComponent } from './../../components/button3d/button3d.component';
import { SidebarComponent } from './../../components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { ProjectsService } from './../../services/projects/projects.service';
import { ThemeService } from './../../services/theme/theme.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-project-info',
  standalone: true,
  imports: [Button3dComponent,SidebarComponent,CommonModule],
  templateUrl: './project-info.component.html',
  styleUrl: './project-info.component.css'
})
export class ProjectInfoComponent  implements OnInit{
  project: any;
  project_details: any;
  id: any;

  constructor(
    public projectsService: ProjectsService,
    private router: Router,
  ) {
  }
    ngOnInit() {
    this.getParams()
    this.project_details = this.projectsService.singleProjectData.find(x=>x.id===this.project.id);
  }

   getParams(){
    this.project = history.state.id;
  }

}