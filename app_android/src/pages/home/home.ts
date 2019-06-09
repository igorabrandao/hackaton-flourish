import { Component } from '@angular/core';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { IonicPage, LoadingController, NavController } from 'ionic-angular';

// Import the config-related things
import { AppSettings } from '../../app/app-config';

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    // Define the background images
    backgrounds = [
        'assets/img/background/background.jpg'
    ];

    /**
     * Class constructor
     * 
     * @param loadingCtrl 
     * @param navCtrl 
     * @param iab 
     * @param sanitize 
     * @param appSettings 
     */
    constructor(public loadingCtrl: LoadingController, public navCtrl: NavController,
        private inAppBrowser: InAppBrowser, private appSettings: AppSettings) {

    }

    /**
     * Initialization handler
     */
    ngOnInit() {
        // Open up the page inside the app
        this.openWebpage(this.appSettings.PAGE_URL);
    }

    /**
     * Function to handle the page opening
     * 
     * @param url 
     */
    openWebpage(url: string) {
        const options: InAppBrowserOptions = {
            location: 'no',
            hardwareback: 'yes',
            zoom: 'no'
        }

        // Opening a URL and returning an InAppBrowserObject
        const browser = this.inAppBrowser.create(url, '_self', options);

        // Inject scripts, css and more with browser.X
    }
}