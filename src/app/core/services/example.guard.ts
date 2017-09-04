import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ExampleGuard implements CanActivate {

    constructor(private router: Router) {}

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const result = true; // usually get this value from a service (or other business logic)

        if (result) {
            // route allowed
            return true;
        } else {
            // route refused
            this.router.navigate(['']);    // redirect to default route for example
            return false;
        }
    }
}
