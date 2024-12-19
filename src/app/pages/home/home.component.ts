import { Component,OnInit } from '@angular/core';
import { Button3dComponent } from './../../components/button3d/button3d.component';
import { SidebarComponent } from './../../components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { ProjectsService } from './../../services/projects/projects.service';
import { ThemeService } from './../../services/theme/theme.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Button3dComponent,SidebarComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

})
export class HomeComponent implements OnInit{
  projects: any[] = [];

  constructor(
    public themeService: ThemeService,
    public projectsService: ProjectsService,
    private router: Router,

  ) {
  }
  isDarkEnable=false;

    ngOnInit() {
    this.projects = this.projectsService.projectsData;

    this.themeService.getCurrentTheme().subscribe(theme => {
      this.isDarkEnable = theme === 'theme-dark';
    });
  }

  goToProject(id: number, porject_name: string) {
    const state = { id };
    const route = ['/project', porject_name];
    this.router.navigate(route, { state });
  }

}
