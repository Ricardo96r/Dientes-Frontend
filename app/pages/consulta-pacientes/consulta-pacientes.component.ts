import {Component} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Router, RouteParams} from '@angular/router-deprecated';

@Component({
    selector: 'historial-pacientes',
    templateUrl: 'app/pages/consulta-pacientes/consulta-pacientes.component.html',
    providers: [ApiService],
})

export class ConsultaPacientesComponent {
    pacientes:any = [];

    constructor(private api:ApiService, private router:Router, private routeParams:RouteParams) {
        this.getPacientes();
    }

    getPacientes() {
        this.api.getPacientes().subscribe(
            pacientes => this.pacientes = pacientes,
            error => console.error(error)
        )
    }

    irConsultasPaciente(idPaciente:number) {
        let link = ['ConsultasPaciente', {idPaciente: idPaciente}];
        this.router.navigate(link);
    }
}