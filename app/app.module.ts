import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoosterSauceComponent } from './rooster-sauce.component';

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [ BrowserModule ],
    declarations: [ AppComponent, RoosterSauceComponent ],
})
export class AppModule { }