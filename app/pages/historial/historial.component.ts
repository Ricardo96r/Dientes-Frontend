import {Component} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Router, RouteParams} from '@angular/router-deprecated';

@Component({
    templateUrl: 'app/pages/historial/historial.component.html',
    providers: [ApiService],
})

export class HistorialComponent {
    historial:any = [];
    alergias:any = [];
    medicamentos:any = [];
    enfermedades:any = [];
    consultas:any = [];

    constructor(private api:ApiService, private router:Router, private routeParams:RouteParams) {
        this.getHistorial();
        this.getAlergias();
        this.getMedicamentos();
        this.getEnfermedades();
        this.getConsultas();
    }

    getHistorial() {
        this.api.getHistorial(this.routeParams.get('idPaciente')).subscribe(
            historial => this.historial = historial[0],
            error => console.error(error)
        )
    }
    
    getAlergias() {
        this.api.getAlergias(this.routeParams.get('idPaciente')).subscribe(
            alergias => this.alergias = alergias,
            error => console.error(error)
        )
    }
    
    getMedicamentos() {
        this.api.getMedicamentos(this.routeParams.get('idPaciente')).subscribe(
            medicamentos => this.medicamentos = medicamentos,
            error => console.error(error)
        )
    }
    
    getEnfermedades() {
        this.api.getEnfermedades(this.routeParams.get('idPaciente')).subscribe(
            emfermedades => this.enfermedades = emfermedades,
            error => console.error(error)
        )
    }
    
    getConsultas() {
        this.api.getConsultas(this.routeParams.get('idPaciente')).subscribe(
            consultas => this.consultas = consultas,
            error => console.error(error)
        )
    }
}