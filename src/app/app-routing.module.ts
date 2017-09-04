import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExampleAComponent} from './example-a/components/example-a/example-a.component';
import {ExampleBComponent} from './example-a/components/example-b/example-b.component';
import {ExampleGuard} from './core/services/example.guard';

const routes: Routes = [

    // set up default route
    {path: '', redirectTo: '/a', pathMatch: 'full'},
    {
        path: 'a',
        component: ExampleAComponent
    },
    {
        path: 'b',
        component: ExampleBComponent,
        canActivate: [ExampleGuard]
    },
    {path: '**', redirectTo: '/a', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
