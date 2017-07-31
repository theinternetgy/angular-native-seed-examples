import { Component } from '@angular/core';
// vendor dependencies
import { TranslateService } from '@ngx-translate/core';
// app
import { MenuItem } from './menu/menu.common';

@Component({
    moduleId: module.id,
    selector: 'maestro-app',
    templateUrl: './app.component.html',
})
export class AppComponent {

    menuItems: MenuItem[] = [
        {
            title: 'menu.home',
            link: ['/home']
        },
        {
            title: 'menu.simple',
            link: ['/simple']
        },
        {
            title: 'menu.about',
            link: ['/about']
        },
        {
            title: 'menu.lazy',
            link: ['/lazy']
        },
        {
            title: 'menu.infinite',
            link: ['/infinite']
        }
    ];

    constructor(translate: TranslateService) {
        translate.setDefaultLang('en');
        translate.use('en');
    }
}