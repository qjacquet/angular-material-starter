import { ChangeDetectorRef, Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { animations } from '../../../animations';
import { NavigationItem } from '../../../../config/navigation';

@Component({
    selector: 'nav-collapsable',
    templateUrl: './collapsable.component.html',
    styleUrls: ['./collapsable.component.scss'],
    animations
})
export class NavCollapsableComponent implements OnInit {
    @Input()
    item: NavigationItem;

    @HostBinding('class')
    classes = 'nav-collapsable nav-item';

    @HostBinding('class.open')
    public isOpen = false;

    // Private
    unsubscribeAll: Subject<any>;


    constructor(
        private changeDetectorRef: ChangeDetectorRef,
        private router: Router
    ) {

    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {

        // Check if the url can be found in
        // one of the children of this item
        this.router.events
            .pipe(
                filter(e => e instanceof NavigationEnd)
            )
            .subscribe((navEnd: NavigationEnd) => {
                if (this.isUrlInChildren(this.item, this.router.url)) {
                    this.expand();
                } else {
                    this.collapse();
                }
            });
    }


    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Toggle collapse
     *
     * @param ev
     */
    toggleOpen(ev): void {
        ev.preventDefault();

        this.isOpen = !this.isOpen;
    }

    /**
     * Expand the collapsable navigation
     */
    expand(): void {
        if (this.isOpen) {
            return;
        }

        this.isOpen = true;

        // Mark for check
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Collapse the collapsable navigation
     */
    collapse(): void {
        if (!this.isOpen) {
            return;
        }

        this.isOpen = false;

        // Mark for check
        this.changeDetectorRef.markForCheck();
    }

    /**
     * Check if the given parent has the
     * given item in one of its children
     *
     * @param parent
     * @param item
     * @returns {boolean}
     */
    isChildrenOf(parent, item): boolean {
        const children = parent.children;

        if (!children) {
            return false;
        }

        if (children.indexOf(item) > -1) {
            return true;
        }

        for (const child of children) {
            if (child.children) {
                if (this.isChildrenOf(child, item)) {
                    return true;
                }
            }
        }

        return false;
    }

    /**
     * Check if the given url can be found
     * in one of the given parent's children
     *
     * @param parent
     * @param url
     * @returns {boolean}
     */
    isUrlInChildren(parent, url): boolean {
        const children = parent.children;

        if (!children) {
            return false;
        }

        for (const child of children) {
            if (child.children) {
                if (this.isUrlInChildren(child, url)) {
                    return true;
                }
            }

            if (child.url === url || url.includes(child.url)) {
                return true;
            }
        }

        return false;
    }

}
