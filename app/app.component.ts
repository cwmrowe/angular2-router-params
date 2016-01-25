import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {ParentComponent} from './parent.component'; 

@Component({
    selector: 'my-app',
    template: `
    <h1>Root</h1>
    <ul>
    <li><a [routerLink]="['Parent', {search: 'foo'}]">Parent Search (params lost on refresh)</a>
    <li><a [routerLink]="['Parent', 'Child']">Child</a>
    <li><a [routerLink]="['Parent', {search: 'foo'}, 'Child']">Child with parent search (params not lost)</a>
    </ul>
    <router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/parent/...', useAsDefault: true, name: 'Parent', component: ParentComponent}
])
export class AppComponent {}