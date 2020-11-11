import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable()
export class SidenavService {
    private sidenav: MatSidenav;

    setSidenav(sidenav: MatSidenav): void {
        this.sidenav = sidenav;
    }

    open(): void {
        this.sidenav.open();
    }

    close(): void {
        this.sidenav.close();
    }

    toggle(): void {
        this.sidenav.toggle();
    }

    isOpen(): boolean {
        return this.sidenav?.opened;
    }
}
