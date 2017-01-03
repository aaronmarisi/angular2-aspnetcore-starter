import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-pairing',    
    template: `
        <h2>Pairing</h2>
        <input type="text" [value]="food" (input)="foodInput($event)"/>        
        <p>Sriracha sauce is great with {{ food }}</p>
    `,
})
export class PairingComponent { 
    food = 'kielbasa';

    foodInput(event: Event) {
        const target = event.target as HTMLInputElement;
        this.food = target.value;
    }
}