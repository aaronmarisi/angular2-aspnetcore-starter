import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',    
    template: `
        <nav>
            <a routerLink="/pairing">Pairing</a> | 
            <a routerLink="/about">About</a>            
        </nav>
        <router-outlet></router-outlet>
    `,
})
export class AppComponent { }