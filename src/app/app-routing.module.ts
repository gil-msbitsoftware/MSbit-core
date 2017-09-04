import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExampleAComponent} from './example-a/components/example-a/example-a.component';
import {ExampleBComponent} from './example-a/components/example-b/example-b.component';

const routes: Routes = [

    {path: '', redirectTo: 'a', pathMatch: 'full'},
    {
        path: 'a',
        component: ExampleAComponent
    },
    {
        path: 'b',
        component: ExampleBComponent
    }
    /*
    { path: '', redirectTo: 'bundle', pathMatch: 'full' },
  { path: 'bundle', component: BundleContainer, canActivate: [TokenGuard] },
  */
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
