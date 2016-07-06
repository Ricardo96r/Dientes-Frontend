import {Component} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Router, RouteParams} from '@angular/router-deprecated';

@Component({
    selector: 'historial-pacientes',
    templateUrl: 'app/pages/factura/factura.component.html',
    providers: [ApiService],
})

export class FacturaComponent {
    pacientes:any = [];
    factura:any = [];
    consulta:any = [];

    constructor(private api:ApiService, private router:Router, private routeParams:RouteParams) {
        this.getFactura();
    }
    
    getFactura() {
        this.api.getFactura(this.routeParams.get('idConsulta')).subscribe(
            factura => this.factura = factura,
            error => console.error(error)
        )
    }
    

    irConsultasPaciente(idPaciente:number) {
        let link = ['ConsultasPaciente', {idPaciente: idPaciente}];
        this.router.navigate(link);
    }
}