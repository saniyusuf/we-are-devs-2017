import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { Deploy } from '@ionic/cloud-angular';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(private alertController: AlertController, private deploy: Deploy, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      this.deploy.check()
        .then((snapshotAvailable: boolean) => {
          if (snapshotAvailable === true) {
            let updateAlertController = this.alertController.create({
              title: "New Update Available",
              buttons: [
                {
                  text: "Not Now",
                  role: 'cancel'
                },
                {
                  text: "Update Now",
                  handler: ()=>{
                     this.deploy.download()
                      .then(() => {
                        return this.deploy.extract();
                      })
                      .then(()=>{
                        this.deploy.load();
                      })
                      .catch((err)=> alert(err));                    
                  }
                }
              ]
            });   
            updateAlertController.present();          
          }
      })      
      .catch((err)=> alert(err));
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
