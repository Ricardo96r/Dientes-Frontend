import {Component} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Router, RouteParams} from '@angular/router-deprecated';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';

import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

@Component({
    selector: 'pie-chart-demo',
    templateUrl: 'app/pages/dashboard/dashboard.component.html',
    providers: [ApiService],
    directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class DashboardComponent {
    public pieChartLabels:string[] = [];
    public pieChartData:number[] = [];
    public pieChartType:string = 'pie';
    public clientesPorEdad:any;
    mostrarChart:boolean = false;
    odontologoTop:any = [];
    odontologoTopIngresos:any = [];
    odontologos:any = [];
    mes:number = 1;
    mesIngresos:number = 1;

    constructor(private api:ApiService, private router:Router, private routeParams:RouteParams) {
        this.getClientesPorEdad();
        this.getOdontologoTopMesPacientes();
        this.getOdontologoTopMesIngresos();
        this.getOdontologos();
    }
    
    /*
     *  Obtiene todos los odontologos
     */
    getOdontologos() {
        this.api.getOdontologos().subscribe(
            odontologos => this.odontologos = odontologos,
            error => console.error(error)
        )
    }
    
    getOdontologoTopMesPacientes() {
        this.api.getOdontologoTopMesPacientes(this.mes).subscribe(
            odontologoTop => this.odontologoTop = odontologoTop,
            error => console.error(error)
        )
    }
    
    getOdontologoTopMesIngresos() {
        this.api.getOdontologoTopMesIngresos(this.mesIngresos).subscribe(
            odontologoTopIngresos => this.odontologoTopIngresos = odontologoTopIngresos,
            error => console.error(error)
        )
    }
    
    getClientesPorEdad() {
        this.api.getClientesPorEdad().subscribe(
            clientesPorEdad => { 
                this.clientesPorEdad = clientesPorEdad
                for (var prop in this.clientesPorEdad) {
                    this.pieChartLabels.push(this.clientesPorEdad[prop].edad);
                    this.pieChartData.push(parseInt(this.clientesPorEdad[prop].clientes, 10));
                }
                this.mostrarChart = true;
                },
            error => console.error(error)
        )
    }
    
    irGraficoBarras(idOdontologo:any) {
        let link = ['Barras', {idOdontologo: idOdontologo}];
        this.router.navigate(link);
    }
    
    public chartClicked(e:any):void {
        
    }

    public chartHovered(e:any):void {
       
    }
}