import {Component} from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Router, RouteParams} from '@angular/router-deprecated';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass} from '@angular/common';

import {CHART_DIRECTIVES} from 'ng2-charts/ng2-charts';

@Component({
    selector: 'pie-chart-demo',
    templateUrl: 'app/pages/barras/barras.component.html',
    providers: [ApiService],
    directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class BarrasComponent {
    mes:number = 1;
    mostrarBarras:boolean = false;
    tratamientos:any = []
    public barChartLabels:string[] = ['Enero'];
    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;
    public barChartOptions:any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartData:any[] = [];
    public odontologo:any = [];

    constructor(private api:ApiService, private router:Router, private routeParams:RouteParams) {
        this.getTratamientoMes();
        this.getOdontologo();
    }
   
    /*
     *  Obtiene todos los odontologos
     */
    getTratamientoMes() {
        this.barChartLabels[0] = this.getMes(this.mes)
        this.mostrarBarras = false;
        this.api.getTratamientoMes(this.mes, this.routeParams.get('idOdontologo')).subscribe(
            tratamientos => {
                this.tratamientos = tratamientos
                for (var prop in this.tratamientos) {
                    this.barChartData.push({data: [parseInt(this.tratamientos[prop].costo)], label: this.tratamientos[prop].nombre});
                }
                this.mostrarBarras = true;
            },
            error => console.error(error)
        )
    }
    
    getOdontologo() {
        this.api.getOdontologo(this.routeParams.get('idOdontologo')).subscribe(
            odontologo => this.odontologo = odontologo[0],
            error => console.error(error)
        )
    }
    
    getMes(mes:number) {
        if(mes == 1) {
            return "Enero";
        } else if(mes == 2) {
            return "Febrero";
        } else if(mes == 3) {
            return "Marzo";
        } else if(mes == 4) {
            return "Abril";
        } else if(mes == 5) {
            return "Mayo"
        } else if(mes == 6) {
            return "Junio";
        } else if(mes == 7) {
            return "Julio";
        } else if(mes == 8) {
            return "Agosto";
        } else if(mes == 9) {
            return "Septiembre";
        } else if(mes == 10) {
            return "Octubre";
        } else if(mes == 11) {
            return "Noviembre";
        } else {
            return "Diciembre";
        }
    }

  public chartClicked(e:any):void {

  }

  public chartHovered(e:any):void {

  }
  
}