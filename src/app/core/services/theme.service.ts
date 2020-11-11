import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConfigService } from './config.service';

const DARK_VALUE = '-dark';

@Injectable()
export class ThemeService {

    private themeClassSubject: BehaviorSubject<string>;
    public themeClass: Observable<string>;

    get theme(): string {
        return this.configService.configValue.theme.class;
    }

    set theme(value: string) {
        this.configService.configValue.theme.class = value;
    }


    get isDark() {
        return this.theme.includes(DARK_VALUE);
    }

    constructor(
        private configService: ConfigService
    ) {
        this.themeClassSubject = new BehaviorSubject<string>(this.theme);
        this.themeClass = this.themeClassSubject.asObservable();
    }

    setTheme(themeClass: string) {
        this.theme = themeClass;
        this.configService.set(this.configService.configValue);
        this.themeClassSubject.next(themeClass);
    }

    setReverse() {
        let theme;

        if (this.isDark) {
            theme = this.theme.replace(DARK_VALUE, '');
        } else {
            theme = this.theme + DARK_VALUE;
        }

        this.setTheme(theme);
    }
}
