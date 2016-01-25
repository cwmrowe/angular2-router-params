import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, ComponentInstruction} from 'angular2/router';
import {ThingsDetailComponent} from './things-detail.component';

@Component({
    selector: 'empty-component',
    template: "<p>EMPTY!!!</p>"
})
class EmptyComponent{}

@Component({
    selector: 'my-things',
    template: `
    <h2>My Things</h2>
    <p>Search Term: {{searchTerm}}</p>
    <router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/', useAsDefault: true, name: 'Empty', component: EmptyComponent},
    {path: '/thing/:id', name: 'ThingsDetail', component: ThingsDetailComponent}
])
export class ThingsComponent { 
    
    searchTerm;
    
    routerOnActivate(next: ComponentInstruction, prev: ComponentInstruction){
        if(next.params['search']){
            this.searchTerm = next.params['search'];
        }
    }
    
}