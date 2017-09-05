import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';

@Injectable()
export class Resolver implements Resolve<any> {
    constructor() {}

    resolve(route: ActivatedRouteSnapshot) {
        // usually get this value from a service (or other business logic that mat rely on a service)
        return 'this is an example for data from a route\'s resolve, used in a component that is configured for that route';
    }
}
