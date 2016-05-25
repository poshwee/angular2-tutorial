
import { Component } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    selector: 'main-component',
    directives: [ ROUTER_DIRECTIVES ],
    templateUrl: './app/views/main.html'
})

export class MainComponent { }