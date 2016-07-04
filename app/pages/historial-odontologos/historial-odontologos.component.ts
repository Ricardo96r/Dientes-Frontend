import {Component} from '@angular/core';
import {Router, RouteParams} from '@angular/router-deprecated';
import {ApiService} from '../../services/api.service';

@Component({
    selector: 'historial',
    templateUrl: 'app/pages/historial-odontologos/historial-odontologos.component.html',
    providers: [ApiService],
})

export class HistorialOdontologosComponent {
    odontologos:any = [];

    constructor(private api:ApiService, private router:Router, private routeParams:RouteParams) {
        this.getOdontologos();
    }

    getOdontologos() {
        this.odontologos = [];
        this.api.getOdontologos(this.routeParams.get('idOdontologo')).subscribe(
            odontologos => this.odontologos = odontologos,
            error => console.error(error)
        )
    }

    irHistorialOdontologo(idOdontologo:number) {
        let link = ['HistorialPacientes', { idOdontologo: idOdontologo}];
        this.router.navigate(link);
    }
}