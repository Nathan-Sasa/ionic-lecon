import { Routes } from '@angular/router';
import { ContainerPage } from './container/container.page';

export const routes: Routes = [
	{
		path: 'container',
		// loadComponent: () => import('./container/container.page').then( m => m.ContainerPage),
		component: ContainerPage,
		children: [
			{
				path: 'home',
				loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
			},
			{
				path: 'profile',
				loadComponent: ()=> import('./home/profile/profile.page').then(m => m.ProfilePage)
			},
			{
				path: 'settings',
				loadComponent: () => import('./settings/settings.page').then( m => m.SettingsPage)
			},
			{
				path: 'stories',
				loadComponent: () => import('./stories/stories.page').then( m => m.StoriesPage)
			},
			{
				path: '',
				redirectTo: '/container/home',
				pathMatch: 'full',
			}
		]
		
  	},
	

	{
		path: '',
		redirectTo: '/container/home',
		pathMatch: 'full',
	},
  
  
  
];
