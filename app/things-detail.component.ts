import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig, ComponentInstruction} from 'angular2/router';

@Component({
    selector: 'my-things',
    template: `<h3>Thing ID: {{id}}</h3>`
})
export class ThingsDetailComponent { 
    
    id;
    
    routerOnActivate(next: ComponentInstruction, prev: ComponentInstruction){
        this.id = next.params['id'];
    }
    
}