
import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    selector: 'profile-component',
    directives: [ ROUTER_DIRECTIVES ],
    templateUrl: './app/views/profile.html'
})

export class ProfileComponent { }