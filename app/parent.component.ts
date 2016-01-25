import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, ComponentInstruction} from 'angular2/router';
import {ChildComponent} from './child.component';

@Component({
    selector: 'empty-component',
    template: "<p>EMPTY!!!</p>"
})
class EmptyComponent{}

@Component({
    selector: 'parent-comp',
    template: `
    <h2>Parent</h2>
    <p>Search Term: {{searchTerm}}</p>
    <router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([ 
    {path: '/', useAsDefault: true, name: 'Empty', component: EmptyComponent},
    {path: '/child', name: 'Child', component: ChildComponent}
])
export class ParentComponent { 
    
    searchTerm;
    
    routerOnActivate(next: ComponentInstruction, prev: ComponentInstruction){
        if(next.params['search']){
            this.searchTerm = next.params['search'];
        }
    }
    
}