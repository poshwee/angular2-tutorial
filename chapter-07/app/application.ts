
import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';

import { MainComponent } from './components/main-component';
import { ProfileComponent } from './components/profile-component';
import { ProfileDetailComponent } from './components/profile-detail-component';

@Component({
    selector: '#application',
    directives: [ ROUTER_DIRECTIVES ],
    templateUrl: './app/views/layouts/main.html'
})

@RouteConfig([
    { path: '/', name: 'MAIN', component: MainComponent, useAsDefault: true },
    { path: '/profile', name: 'PROFILE', component: ProfileComponent },
    { path: '/profile/:name', name: 'PROFILEDETAIL', component: ProfileDetailComponent }
])

export class AppComponent { }