import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class MatchMediaService
{
    activeMediaQuery: string;
    onMediaChange: BehaviorSubject<string> = new BehaviorSubject<string>('');

    constructor(
        private mediaObserver: MediaObserver
    ) {
        this.activeMediaQuery = '';
        this._init();
    }

    private _init(): void {
        this.mediaObserver.asObservable()
        .pipe(
            debounceTime(500),
            distinctUntilChanged(),
            filter((changes: MediaChange[]) => changes.length > 0),
            map((changes: MediaChange[]) => changes[0])
        )
        .subscribe((change: MediaChange) => {
            if ( this.activeMediaQuery !== change.mqAlias ) {
                this.activeMediaQuery = change.mqAlias;
                this.onMediaChange.next(change.mqAlias);
            }
        });
    }

}
