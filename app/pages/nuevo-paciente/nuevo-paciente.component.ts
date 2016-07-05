import {Component} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Router, RouteParams} from '@angular/router-deprecated';

@Component({
    templateUrl: 'app/pages/nuevo-paciente/nuevo-paciente.component.html',
    providers: [ApiService],
})

export class NuevoPacienteComponent {

    constructor(private api:ApiService, private router:Router, private routeParams:RouteParams) {

    }

}