import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonIcon, IonTabBar, IonTabButton, IonTabs } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cog, home, library, personCircle, play, playCircle, radio, search } from 'ionicons/icons';

@Component({
  selector: 'app-container',
  templateUrl: './container.page.html',
  styleUrls: ['./container.page.scss'],
  standalone: true,
  imports: [IonIcon, IonTabBar, IonTabButton, IonTabs, CommonModule, FormsModule]
})
export class ContainerPage implements OnInit {

  constructor() {
    addIcons({ library, playCircle, play, radio, search, home, cog, personCircle })
   }

  ngOnInit() {
  }

}
