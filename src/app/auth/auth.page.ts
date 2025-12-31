import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButtons, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonLabel, NavController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,IonButtons, IonButton, IonLabel, CommonModule, FormsModule]
})
export class AuthPage implements OnInit {

	constructor(
		private navCtrl: NavController
	) { }

	ngOnInit() {
	}

	login(){
		localStorage.setItem('isLoggedIn', 'true');
		console.log('User logged in, isLoggedIn set to:', localStorage.getItem('isLoggedIn'));

		this.navCtrl.navigateRoot('/container/home');
	}
}
