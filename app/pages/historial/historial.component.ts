import {Component} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Router} from '@angular/router-deprecated';

@Component({
    selector: 'historial',
    templateUrl: 'app/pages/historial/historial.component.html',
    providers: [ApiService],
})

export class HistorialComponent {
    pacientes:any = [];

    constructor(private api:ApiService, private router:Router) {
        this.getPacientes();
    }

    getPacientes() {
        this.api.getOdontologos().subscribe(
            pacientes => this.pacientes = pacientes,
            error => console.error(error)
        )
    }

    irHistorialPaciente(idOdontologo:number, idPaciente:number) {
        let link = ['HistorialPaciente', { idOdontologo: idOdontologo, idPaciente: idPaciente}];
        this.router.navigate(link);
    }
}