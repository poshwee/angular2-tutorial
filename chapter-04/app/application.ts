
import { Component } from 'angular2/core';

import { MainComponent } from './components/main-component';
import { ProfileComponent } from './components/profile-component';

@Component({
    selector: '#application',
    directives: [ MainComponent, ProfileComponent ],
    template: '<h1>Hello World</h1><main-component></main-component><profile-component></profile-component>'
})

export class AppComponent { }