import {Component} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Router, RouteParams} from '@angular/router-deprecated';

@Component({
    templateUrl: 'app/pages/cita/cita.component.html',
    providers: [ApiService],
})

export class CitaComponent {
    odontologos:any = []
    pacientes:any = []
    paciente:any = []
    horas:number[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
    minutos:number[] = [];
    dia:any;
    hora:number = -1;
    minuto:number = -1;
    idOdontologo:number = 1;
    motivo:string;
    citaCreada:boolean = false
    errorCita: boolean = false

    constructor(private api:ApiService, private router:Router, private routeParams:RouteParams) {
        this.getOdontologos();
        this.getPaciente();
        this.generarMinutos();
    }
    
    postCita() {
        if ( ! ((this.hora == -1) || (this.minuto == -1))) {
            this.errorCita = false;
            console.log(this.getBody());
            this.api.postCita(this.getBody()).subscribe(
                cita => {
                    if (cita.resultado == "exito") {
                        this.citaCreada = true;
                        this.errorCita = false;
                    } else {
                        this.errorCita = false;
                    }
                },
                error => {
                    console.log(error)
                    this.errorCita = true;
                }
            )
        } else {
            this.errorCita = true;
        }
    }
    
    getBody() {
        let fecha = this.dia + ' ' + this.hora + ':' + this.minuto + ':' + '00'
        return 'fecha=' + fecha 
        + '&id_paciente=' + this.routeParams.get('idPaciente')
        + '&id_odontologo=' + this.idOdontologo 
        + '&motivo=' + this.motivo;
    }
    
    getOdontologos() {
        this.api.getOdontologos().subscribe(
            odontologos => this.odontologos = odontologos,
            error => console.error(error)
        )
    }
    
    generarMinutos() {
        for (var i = 0; i < 60; i++) {
            this.minutos.push(i);
        }
    }
    
    irNuevoPaciente() {
        let link = ['NuevoPaciente'];
        this.router.navigate(link);
    }
    
    getPaciente() {
        this.api.getPaciente(this.routeParams.get('idPaciente')).subscribe(
            paciente => this.paciente = paciente[0],
            error => console.error(error)
        )
    }
}