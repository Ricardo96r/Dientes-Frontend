import {Component} from '@angular/core';
import {Router, RouteParams} from '@angular/router-deprecated';
import {ApiService} from '../../services/api.service';

@Component({
    templateUrl: 'app/pages/consulta/consulta.component.html',
    providers: [ApiService],
})

export class ConsultaComponent {
    consulta:any = []

    constructor(private api:ApiService, private router:Router, private routeParams:RouteParams) {
        this.getConsulta();
    }
    
    getConsulta() {
        this.api.getConsulta(this.routeParams.get('idOdontologo'), this.routeParams.get('idPaciente')).subscribe(
            consulta => this.consulta = consulta[0],
            error => console.error(error)
        )
    }
    
    irFacturar(idConsulta:number) {
        let link = ['Factura', {idConsulta: idConsulta}];
        this.router.navigate(link);
    }

}