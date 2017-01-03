import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-about',    
    template: `
        <h2>About Sriracha</h2>

        <p>This is what Wikipedia says about <a href="https://en.wikipedia.org/wiki/Sriracha_sauce_%28Huy_Fong_Foods%29">Sriracha sauce</a>:</p>

        <blockquote>It can be recognized by its bright red color and its packaging: a clear plastic bottle with a green cap, text in Vietnamese, English, Chinese, French, and Spanish, and the rooster logo. David Tran was born in 1945, the Year of the Rooster...<blockquote>
    `,
})
export class AboutComponent { }