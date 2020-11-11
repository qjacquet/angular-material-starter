import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

    user: User;

    constructor(
        private userService: UserService
    ) { }

    ngOnInit() {
    }

    click() {
        this.userService.getById(1).subscribe(u => {
            this.user = u;
            console.log(this.user);
        });

    }
}
