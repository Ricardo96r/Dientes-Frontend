import {Component} from '@angular/core';
import {Router} from '@angular/router-deprecated';

@Component({
    selector: 'header',
    templateUrl: 'app/pages/header/header.component.html',
})

export class HeaderComponent {

    constructor(private router:Router) {
    }

    irHistorial() {
        let link = ['HistorialOdontologos'];
        this.router.navigate(link);
    }
}