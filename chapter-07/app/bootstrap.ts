
import { bootstrap } from 'angular2/platform/browser'
import { ROUTER_PROVIDERS } from 'angular2/router'
import { AppComponent } from './application'

bootstrap(AppComponent, [ ROUTER_PROVIDERS ]).catch(err => console.error(err));