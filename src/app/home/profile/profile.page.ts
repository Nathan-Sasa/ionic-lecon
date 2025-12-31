import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonImg, IonModal, IonTitle, IonToolbar, IonList, IonItem, IonLabel, LoadingController, ModalController } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { create, createOutline, checkmarkCircleOutline, eye, imageOutline, expandOutline, imagesOutline, phonePortraitOutline, imageSharp, close, globeOutline, globeSharp, globe, briefcaseOutline, checkmarkDoneCircleOutline, heartCircleOutline, add } from 'ionicons/icons';
import { ToastController } from '@ionic/angular';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.page.html',
	styleUrls: ['./profile.page.scss'],
	standalone: true,
	imports: [
		IonContent, 
		IonHeader, 
		IonTitle, 
		IonToolbar,
		IonBackButton,
		IonButtons,
		IonButton,
		IonImg,
		IonIcon,
		IonModal,
		IonList,
		IonItem,
		IonLabel,


		CommonModule, 
		FormsModule
	]
})
export class ProfilePage implements OnInit {

	constructor(
		private toastCtrl: ToastController,
		private loadingCtrl: LoadingController,
		private modal: ModalController
	) {
		addIcons({ create, createOutline, checkmarkCircleOutline, eye, imageOutline, imagesOutline,expandOutline, phonePortraitOutline, imageSharp, close, globeOutline, globeSharp, globe, briefcaseOutline, checkmarkDoneCircleOutline, heartCircleOutline, add });
	}

	isToast: boolean = false;
	isLoading: boolean = false;

	ngOnInit() {
	}

	async showToast(){
		const toast = await this.toastCtrl.create({
			message: 'Il semble avoir un problème de connexion. veillez réessayer !',
			duration: 3000,
			position: 'bottom'
		})
		await toast.present()
	}

	async showLoading(){
		const loading = await this.loadingCtrl.create({
			message: 'Chargement...',
			duration: 5000
		})
		await loading.present()
	}

	timerEvent(): void{
		this.isLoading = true

		if(this.isLoading === true){
			setTimeout(()=>{
				this.showLoading()
				setTimeout(()=>{
					this.isLoading = false
					this.showToast()
				}, 5500)
			}, 200)
		}
	}
	
	// fermeture de modal
	closeModal(){
		this.modal.dismiss();
	}
}
