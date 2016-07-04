import {Component} from '@angular/core';
import {Router, RouteParams} from '@angular/router-deprecated';
import {ApiService} from '../../services/api.service';

@Component({
    templateUrl: 'app/pages/historial-odontologos/historial-odontologos.component.html',
    providers: [ApiService],
})

export class HistorialOdontologosComponent {
    odontologos:any = [];
    error:any = [];

    constructor(private api:ApiService, private router:Router, private routeParams:RouteParams) {
        this.getOdontologos();
    }

    /*
     *  Obtiene todos los odontologos
     */
    getOdontologos() {
        this.odontologos = [];
        this.api.getOdontologos().subscribe(
            odontologos => this.odontologos = odontologos,
            error => console.error(error)
        )
    }

    /*
     *  Obtiene todos los odontologos
     */
    irHistorialOdontologo(idOdontologo:number) {
        let link = ['HistorialPacientes', {idOdontologo: idOdontologo}];
        this.router.navigate(link);
    }
}