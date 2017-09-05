import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExampleGuard} from './services/example.guard';
import {Resolver} from './services/resolver';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [ExampleGuard, Resolver],
    declarations: [],
})
export class CoreModule {
}
