import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'msbit-core-example-a',
    templateUrl: './example-a.component.html',
    styleUrls: ['./example-a.component.scss']
})
export class ExampleAComponent implements OnInit {
    public routeResolveData;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.routeResolveData = this.route.snapshot.data['exampleValueFromResolve'];
    }

}
