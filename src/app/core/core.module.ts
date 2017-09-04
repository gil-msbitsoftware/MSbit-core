import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExampleGuard} from './services/example.guard';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [ExampleGuard],
    declarations: [],
})
export class CoreModule {
}
