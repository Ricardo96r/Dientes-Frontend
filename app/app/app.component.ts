import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {DashboardComponent}  from './../dashboard/dashboard.component';
import {HeaderComponent} from './../header/header.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app/app.component.html',
    directives: [ROUTER_DIRECTIVES, HeaderComponent],
    providers: [
        ROUTER_PROVIDERS,
    ]
})

@RouteConfig([
    {path: '/', name: 'Dashboard', component: DashboardComponent, useAsDefault: true},
])

export class AppComponent {
    title = 'Tour of Heroes';
}