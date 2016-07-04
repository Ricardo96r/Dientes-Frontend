import {Component} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Router, RouteParams} from '@angular/router-deprecated';

@Component({
    selector: 'historial-pacientes',
    templateUrl: 'app/pages/historial/historial.component.html',
    providers: [ApiService],
})

export class HistorialComponent {
    historial:any = [];

    constructor(private api:ApiService, private router:Router, private routeParams:RouteParams) {
        this.getHistorial();
    }

    getHistorial() {
        this.api.getHistorial(this.routeParams.get('idPaciente')).subscribe(
            historial => this.historial = historial,
            error => console.error(error)
        )
    }
}