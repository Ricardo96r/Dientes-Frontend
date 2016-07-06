import {Component} from '@angular/core';
import {Router, RouteParams} from '@angular/router-deprecated';
import {ApiService} from '../../services/api.service';

@Component({
    templateUrl: 'app/pages/consulta/consulta.component.html',
    providers: [ApiService],
})

export class ConsultaComponent {
    consulta:any = []
    costo:any;
    forma_de_pago:any;

    constructor(private api:ApiService, private router:Router, private routeParams:RouteParams) {
        this.getConsulta();
    }
    
    getConsulta() {
        this.api.getConsulta(this.routeParams.get('idConsulta')).subscribe(
            consulta => this.consulta = consulta[0],
            error => console.error(error)
        )
    }
    
    getBody() {
        return 'id_consulta=' + this.consulta.id +
		    '&costo=' + this.costo +
            '&forma_de_pago=' + this.forma_de_pago;
    }
    
    postFacturar() {
        this.api.postFacturar(this.getBody()).subscribe(
                factura => {
                    console.log(factura)
                },
                error => {
                    console.log(error);
                }
            )
    }
    
    irFacturar(idConsulta:number) {
        if ((this.costo != null) || (this.costo > 0)) {
            if (this.forma_de_pago != null) {
                this.postFacturar();
                let link = ['Factura', {idConsulta: idConsulta}];
                this.router.navigate(link);
            }
        }
    }
    
    verFactura(idConsulta:number) {
        let link = ['Factura', {idConsulta: idConsulta}];
        this.router.navigate(link);
    }

}