
import { Component } from 'angular2/core';

import { MainComponent } from './components/main-component';
import { ProfileComponent } from './components/profile-component';

@Component({
    selector: '#application',
    directives: [ MainComponent, ProfileComponent ],
    templateUrl: './app/views/layouts/main.html'
})

export class AppComponent { }