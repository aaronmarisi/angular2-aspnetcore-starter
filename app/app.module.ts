import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PairingComponent } from './pairing.component';
import { AboutComponent } from './about.component';

const routes: Routes = [
  { path: '', redirectTo: '/pairing', pathMatch: 'full' },
  { path: 'pairing',  component: PairingComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [ 
        BrowserModule,
        RouterModule.forRoot(routes),
    ],
    declarations: [ 
        AppComponent, 
        PairingComponent, 
        AboutComponent, 
    ],
})
export class AppModule { }