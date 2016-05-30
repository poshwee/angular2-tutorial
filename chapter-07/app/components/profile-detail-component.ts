
import { Component } from 'angular2/core';
import { Router, RouteParams, ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    selector: 'profile-detail-component',
    directives: [ ROUTER_DIRECTIVES ],
    templateUrl: './app/views/profile-detail.html'
})

export class ProfileDetailComponent { 
    
    public profileName: String;
    public location: String;
    
    constructor(private router: Router, private params: RouteParams){
        
        this.profileName = params.get('name');
        this.location = location.pathname.replace('/','');
           
    }
    
    private back(){
        this.router.navigate([ this.location.toUpperCase() ]);
    }
    
}