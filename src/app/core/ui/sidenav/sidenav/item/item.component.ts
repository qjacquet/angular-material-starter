import { ChangeDetectorRef, Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { NavigationItem } from '../../../../config/navigation';

@Component({
    selector: 'nav-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class NavItemComponent implements OnInit {
    @HostBinding('class')
    classes = 'nav-item';

    @Input()
    item: NavigationItem;


    unsubscribeAll: Subject<any>;

    constructor(

    ) {

    }

    ngOnInit(): void {

    }
}
