import {Component} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Router, RouteParams} from '@angular/router-deprecated';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';

import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

@Component({
    templateUrl: 'app/pages/cita-paciente/cita-paciente.component.html',
    providers: [ApiService],
})

export class CitaPacienteComponent {
    pacientes:any = []

    constructor(private api:ApiService, private router:Router, private routeParams:RouteParams) {
        this.getPacientes();
    }
    
    getPacientes() {
        this.api.getPacientes().subscribe(
            pacientes => this.pacientes = pacientes,
            error => console.error(error)
        )
    }
    
    irNuevoPaciente() {
        let link = ['NuevoPaciente'];
        this.router.navigate(link);
    }
    
    irCrearCita(idPaciente: number) {
        let link = ['Cita', {idPaciente: idPaciente}];
        this.router.navigate(link);
    } 
}