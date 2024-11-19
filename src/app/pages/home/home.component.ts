import { Component,OnInit } from '@angular/core';
import { ButtonComponent } from './../../components/button/button.component';
import { Button3dComponent } from './../../components/button3d/button3d.component';
import { SidebarComponent } from './../../components/sidebar/sidebar.component';
import { ThemeService } from './../../services/theme/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent,Button3dComponent,SidebarComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

})
export class HomeComponent implements OnInit{
  constructor(
    public themeService: ThemeService,
  ) {
  }
  isDarkEnable=false;

    ngOnInit() {
    this.themeService.getCurrentTheme().subscribe(theme => {
      this.isDarkEnable = theme === 'theme-dark';
    });
  }

  projectsData = [
  {
    id: 2,
    title: 'easy2bwise',
    category: 'Web Application',
    img: '/assets/images/projects/easy2bwise_mokup3-Photoroom.png',
    ProjectHeader: {
      title: 'Project Management UI - From Context',
      publishDate: 'Jul 26, 2021',
      tags: 'UI / Frontend',
    },
  },
  {
    id: 1,
    title: 'Les dunes restaurant',
    category: 'UI/UX Design',
    img: '/assets/images/projects/dunes_mockup5-Photoroom.png',
    ProjectHeader: {
      title: 'Project Management UI - From Context',
      publishDate: 'Jul 26, 2021',
      tags: 'UI / Frontend',
    },
  },
  {
    id: 3,
    title: 'Datandtec web app & API',
    category: 'Web Application',
    img: '/assets/images/projects/datantec_mokup4-Photoroom.png',
    ProjectHeader: {
      title: 'Project Management UI - From Context',
      publishDate: 'Jul 26, 2021',
      tags: 'UI / Frontend',
    },
  },
  {
    id: 4,
    title: 'Datandtec Mobile Application',
    category: 'Mobile Application',
    img: '/assets/images/projects/datandtec_app.png',
  },
  {
    id: 6,
    title: 'Captio web app',
    category: 'Web Application',
    img: '/assets/images/projects/captio_web_2.png',
    ProjectHeader: {
      title: 'Project Management UI - From Context',
      publishDate: 'Jul 26, 2021',
      tags: 'UI / Frontend',
    },
  },
  {
    id: 7,
    title: 'Captio mobile app',
    category: 'Mobile Application',
    img: '/assets/images/projects/captio_app_3.png',
    ProjectHeader: {
      title: 'Project Management UI - From Context',
      publishDate: 'Jul 26, 2021',
      tags: 'UI / Frontend',
    },
  },
];

}
