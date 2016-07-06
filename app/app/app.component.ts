import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {HistorialOdontologosComponent}  from '../pages/historial-odontologos/historial-odontologos.component';
import {HistorialPacientesComponent}  from '../pages/historial-pacientes/historial-pacientes.component';
import {HistorialComponent}  from '../pages/historial/historial.component';
import {HeaderComponent} from '../pages/header/header.component';
import {DashboardComponent} from '../pages/dashboard/dashboard.component';
import {BarrasComponent} from '../pages/barras/barras.component';
import {CitaPacienteComponent} from '../pages/cita-paciente/cita-paciente.component';
import {CitaComponent} from '../pages/cita/cita.component';
import {NuevoPacienteComponent} from '../pages/nuevo-paciente/nuevo-paciente.component';
import {ConsultaPacientesComponent} from '../pages/consulta-pacientes/consulta-pacientes.component';
import {ConsultasPacienteComponent} from '../pages/consultas-paciente/consultas-paciente.component';
import {ConsultaComponent} from '../pages/consulta/consulta.component';
import {FacturaComponent} from '../pages/factura/factura.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app/app.component.html',
    directives: [ROUTER_DIRECTIVES, HeaderComponent],
    providers: [
        ROUTER_PROVIDERS,
    ]
})

@RouteConfig([
    { path: '/', name: 'Dashboard', component: DashboardComponent, useAsDefault: true },
    { path: '/barras/:idOdontologo', name: 'Barras', component: BarrasComponent },
    { path: '/historial/odontologo', name: 'HistorialOdontologos', component: HistorialOdontologosComponent },
    { path: '/historial/odontologo/:idOdontologo', name: 'HistorialPacientes', component: HistorialPacientesComponent },
    { path: '/historial/odontologo/:idOdontologo/paciente/:idPaciente', name: 'Historial', component: HistorialComponent },
    { path: '/cita/paciente/:idPaciente', name: 'Cita', component: CitaComponent },
    { path: '/cita/pacientes', name: 'CitaPaciente', component: CitaPacienteComponent },
    { path: '/nuevo/paciente', name: 'NuevoPaciente', component: NuevoPacienteComponent },
    { path: '/consulta/pacientes', name: 'ConsultaPacientes', component: ConsultaPacientesComponent },
    { path: '/consulta/pacientes/:idPaciente', name: 'ConsultasPaciente', component: ConsultasPacienteComponent },
    { path: '/consulta/:idConsulta', name: 'Consulta', component: ConsultaComponent },
    { path: '/factura/:idConsulta', name: 'Factura', component: FacturaComponent },
])

export class AppComponent {

}