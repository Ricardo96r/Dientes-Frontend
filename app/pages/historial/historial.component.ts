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
    consultasPorOdontologo:any = [];
    paciente:any = [];
    dientes:any = [];

    constructor(private api:ApiService, private router:Router, private routeParams:RouteParams) {
        this.getHistorial();
        this.getAlergias();
        this.getMedicamentos();
        this.getEnfermedades();
        this.getConsultas();
        this.getConsultasPorOdontologo();
        this.getPaciente();
        this.getDientes();
    }

    getHistorial() {
        this.api.getHistorial(this.routeParams.get('idPaciente')).subscribe(
            historial => this.historial = historial,
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
    
    getConsultasPorOdontologo() {
        this.api.getConsultasPorOdontologo(this.routeParams.get('idOdontologo'), this.routeParams.get('idPaciente')).subscribe(
            consultasPorOdontologo => this.consultasPorOdontologo = consultasPorOdontologo,
            error => console.error(error)
        )
    }
    
    getPaciente() {
        this.api.getPaciente(this.routeParams.get('idPaciente')).subscribe(
            paciente => { 
                this.paciente = paciente[0];
                console.log(this.paciente);
                 },
            error => console.error(error)
        )
    }
    
    getDientes() {
        this.api.getDientes(this.routeParams.get('idPaciente')).subscribe(
            dientes => this.dientes = dientes,
            error => console.error(error)
        )
    }
}