import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, IonImg } from '@ionic/angular/standalone';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
	imports: [
		IonHeader, 
		IonToolbar, 
		IonTitle, 
		IonContent, 
		IonButton,
		IonButtons,
		IonImg,
		RouterModule
	],
})
export class HomePage {
  constructor() {}
}
