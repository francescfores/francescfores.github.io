import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ProjectInfoComponent} from "./pages/project-info/project-info.component";

export const routes: Routes = [
	{
		path: '',
	    component: HomeComponent
	},
	{ 
		path: 'project/:name', 
		component: ProjectInfoComponent
      },
    { path: '',redirectTo: "",  pathMatch: "full" },
  	{ path: "**", redirectTo: "", pathMatch: "full" },
];