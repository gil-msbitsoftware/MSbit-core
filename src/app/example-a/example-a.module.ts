import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExampleAComponent} from './components/example-a/example-a.component';
import {ExampleBComponent} from './components/example-b/example-b.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [ExampleAComponent, ExampleBComponent],
    exports: [ExampleAComponent, ExampleBComponent]
})
export class ExampleAModule {
}
