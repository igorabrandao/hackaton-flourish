import { AppState } from './app.global';
import { Component, ViewChild } from '@angular/core';
import { App, Nav, Platform, MenuController, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Subject } from 'rxjs/Subject';

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;

    // Set the first page
    rootPage: any = 'HomePage';
    activePage = new Subject();

    // Menu types
    MENU = {
        DEFAULT: 'menu-components',
        MATERIAL: 'menu-material',
        AVATAR: 'menu-avatar',
    };

    // Page basic definitions
    pages: Array<{ title: string, component: any, active: boolean, icon: string }>;
    rightMenuItems: Array<{ icon: string, active: boolean }>;
    state: any;
    placeholder = 'assets/img/avatar/girl-avatar.png';
    chosenPicture: any;

    /**
     * Class constructor
     * 
     * @param app 
     * @param platform 
     * @param statusBar 
     * @param splashscreen 
     * @param global 
     * @param menuCtrl 
     * @param toastCtrl 
     * @param sidemenuDataCtrl 
     * @param alertCtrl 
     */
    constructor(public app: App, public platform: Platform, public statusBar: StatusBar, public splashscreen: SplashScreen,
        public global: AppState, public menuCtrl: MenuController, public alertCtrl: AlertController, ) {
        // Call the initialize app method
        this.initializeApp();

        // Set the right menu items
        this.rightMenuItems = [
            { icon: 'apps', active: true },
            { icon: 'power', active: false },
        ];

        // Set the menu options
        this.pages = [
            { title: 'Sair do app', component: 'HomePage', active: false, icon: 'power' },
        ];

        // Map the sidemenu
        this.activePage.subscribe((selectedPage: any) => {
            this.pages.map(page => {
                page.active = page.title === selectedPage.title;
            });
        });
    }

    /**
     * Method responsible for initialize the app
     */
    initializeApp() {
        this.platform.ready().then(() => {
            this.global.set('theme', '');
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashscreen.hide();

            // Set the default menu style
            this.menuCtrl.enable(false, 'right');

            // Disables all other sidemenus
            Object.keys(this.MENU).map(k => this.menuCtrl.enable(false, this.MENU[k]));

            // Enables the selected menu
            //this.menuCtrl.enable(true, this.MENU.MATERIAL);

            /*this.platform.registerBackButtonAction(function (event) {
                // Nothing happens
            }, 999);*/
        });

        this.platform.registerBackButtonAction(() => {
            // Catches the active view
            let nav = this.app.getActiveNavs()[0];
            let activeView = nav.getActive();
            // Checks if can go back before show up the alert
            if (activeView.name === 'HomePage') {
                if (nav.canGoBack()) {
                    nav.pop();
                } else {
                    const alert = this.alertCtrl.create({
                        title: 'Fechar o App',
                        message: 'Você tem certeza?',
                        buttons: [{
                            text: 'Cancelar',
                            role: 'cancel',
                            handler: () => {
                                this.nav.setRoot('HomePage');
                                console.log('** Saída do App Cancelada! **');
                            }
                        }, {
                            text: 'Fechar o App',
                            handler: () => {
                                this.logout();
                                this.platform.exitApp();
                            }
                        }]
                    });
                    alert.present();
                }
            }
        });
    }

    /**
     * Method responsible for handle page redirection from menu
     * 
     * @param page 
     */
    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario

        // Check if it isn't the logout option
        if (page.title.indexOf('Sair') >= 0) {
            // Call the logout function
            this.logout();
        } else {
            // Call the selected page
            this.nav.setRoot(page.component);
            this.activePage.next(page);
        }
    }

    /**
     * Method responsible for handle the right menu click
     * 
     * @param item 
     */
    rightMenuClick(item) {
        this.rightMenuItems.map(menuItem => menuItem.active = false);
        item.active = true;
    }

    /**
     * Method responsible for handle the user logout
     */
    logout() {
        // Clear the local storage
        localStorage.clear();
    }
}