import {Component} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Router, RouteParams} from '@angular/router-deprecated';

@Component({
    selector: 'historial-pacientes',
    templateUrl: 'app/pages/historial-pacientes/historial-pacientes.component.html',
    providers: [ApiService],
})

export class HistorialPacientesComponent {
    pacientes:any = [];

    constructor(private api:ApiService, private router:Router, private routeParams:RouteParams) {
        this.getPacientes();
    }

    getPacientes() {
        this.api.getOdontologoPaciente(this.routeParams.get('idOdontologo')).subscribe(
            pacientes => this.pacientes = pacientes,
            error => console.error(error)
        )
    }

    irHistorialPaciente(idPaciente:number) {
        let link = ['Historial', {idOdontologo: this.routeParams.get('idOdontologo'), idPaciente: idPaciente}];
        this.router.navigate(link);
    }
}