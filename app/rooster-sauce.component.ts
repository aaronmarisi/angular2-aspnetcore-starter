import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-rooster-sauce',
    template: `
        <input type="text" [value]="food" (input)="foodInput($event)"/>
        <p>Sriracha sauce is great with {{ food }}</p>
    `,
})
export class RoosterSauceComponent {
    food = '';

    foodInput(event: Event) {
        const target = event.target as HTMLInputElement;
        this.food = target.value;
    }
}