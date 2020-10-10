import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username; password;
  constructor(public alertCtrl: AlertController) { }

  async showAlert() {
    if (this.username == undefined || this.password == undefined) {
      const alert = await this.alertCtrl.create({
        header: 'Login Alert',
        message: `User Name and Password are required.`,
        cssClass: 'alertcss',
        buttons: [{
          text: 'OK',
          cssClass: 'alertbuttoncolor',
        }]
      });
      await alert.present();
    }
    else {
      const alert = await this.alertCtrl.create({
        header: 'Login Alert',
        message: `Welcome ${this.username}`,
        cssClass: 'alertcss',
        buttons: [{
          text: 'OK',
          cssClass: 'alertbuttoncolor',
        }]
      });
      await alert.present();
    }
  }
}
