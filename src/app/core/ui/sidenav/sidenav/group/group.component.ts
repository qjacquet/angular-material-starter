import { ChangeDetectorRef, Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { NavigationItem } from '../../../../config/navigation';

@Component({
    selector   : 'nav-group',
    templateUrl: './group.component.html',
    styleUrls  : ['./group.component.scss']
})
export class NavGroupComponent implements OnInit
{
    @HostBinding('class')
    classes = 'nav-group nav-item';

    @Input()
    item: NavigationItem;
    unsubscribeAll: Subject<any>;

    constructor(

    ) {

    }

    ngOnInit(): void {

    }
}
