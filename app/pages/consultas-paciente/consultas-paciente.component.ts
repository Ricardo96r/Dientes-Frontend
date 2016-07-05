import {Component} from '@angular/core';
import {Router, RouteParams} from '@angular/router-deprecated';
import {ApiService} from '../../services/api.service';

@Component({
    templateUrl: 'app/pages/consultas-paciente/consultas-paciente.component.html',
    providers: [ApiService],
})

export class ConsultasPacienteComponent {
    consultas:any = [];
    error:any = [];

    constructor(private api:ApiService, private router:Router, private routeParams:RouteParams) {
        this.getConsultas();
    }

    /*
     *  Obtiene todos los odontologos
     */
    getConsultas() {
        this.api.getConsultas(this.routeParams.get('idPaciente')).subscribe(
            consultas => this.consultas = consultas,
            error => console.error(error)
        )
    }

    /*
     *  Obtiene todos los odontologos
     */
    irConsulta(idOdontologo:number, idPaciente:number) {
        let link = ['Consulta', {idOdontologo: idOdontologo, idPaciente: idPaciente}];
        this.router.navigate(link);
    }
}