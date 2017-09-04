import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ExampleAModule} from './example-a/example-a.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ExampleAModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
