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
    mostrarBarras:boolean = true;
    tratamientos:any = []
    public barChartLabels:string[] = ['Enero'];
    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;
    public barChartOptions:any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
      public barChartData:any[] = [
        {data: [65, 59, 80, 81, 56, 55, 40], label:'Series A'},
        {data: [28, 48, 40, 19, 86, 27, 90], label:'Series B'},
        {data: [28, 48, 40, 19, 86, 27, 90], label:'Series 3'},
        {data: [28, 48, 40, 19, 86, 27, 90], label:'Series 1'}
    ];

    constructor(private api:ApiService, private router:Router, private routeParams:RouteParams) {
        this.getTratamientoMes();
    }
    
    /*
     *  Obtiene todos los odontologos
     */
    getTratamientoMes() {
        this.api.getTratamientoMes(this.mes, this.routeParams.get('idOdontologo')).subscribe(
            tratamientos => {
                this.tratamientos = tratamientos
                console.log(this.barChartData)
                /*for (var prop in this.tratamientos) {
                    this.barChartData.push({data: [this.tratamientos[prop].costo], label: this.tratamientos[prop].id_tratamiento});
                    console.log(this.barChartData)y
                }*/
                this.mostrarBarras = true;
            },
            error => console.error(error)
        )
    }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
  
}