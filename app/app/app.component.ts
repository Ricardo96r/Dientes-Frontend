import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {HistorialOdontologosComponent}  from '../pages/historial-odontologos/historial-odontologos.component';
import {HistorialPacientesComponent}  from '../pages/historial-pacientes/historial-pacientes.component';
import {HistorialComponent}  from '../pages/historial/historial.component';
import {HeaderComponent} from '../pages/header/header.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app/app.component.html',
    directives: [ROUTER_DIRECTIVES, HeaderComponent],
    providers: [
        ROUTER_PROVIDERS,
    ]
})

@RouteConfig([
    { path: '/historial/odontologo', name: 'HistorialOdontologos', component: HistorialOdontologosComponent, useAsDefault: true },
    { path: '/historial/odontologo/:idOdontologo', name: 'HistorialPacientes', component: HistorialPacientesComponent },
    { path: '/historial/odontologo/:idOdontologo/paciente/:idPaciente', name: 'Historial', component: HistorialComponent },
])

export class AppComponent {

}