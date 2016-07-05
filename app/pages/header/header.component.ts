import {Component} from '@angular/core';
import {Router} from '@angular/router-deprecated';

@Component({
    selector: 'header',
    templateUrl: 'app/pages/header/header.component.html',
})

export class HeaderComponent {

    constructor(private router:Router) {
    }

    irDashboard() {
        let link = ['Dashboard'];
        this.router.navigate(link);
    }
    
    irHistorial() {
        let link = ['HistorialOdontologos'];
        this.router.navigate(link);
    }
}