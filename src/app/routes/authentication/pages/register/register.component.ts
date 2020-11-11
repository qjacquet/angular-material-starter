import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from 'src/app/core/models/user';
import { AuthenticationService } from '../../../../core/services/authentication.service';
import { FormService } from '../../../../core/services/form.service';
import { UserService } from '../../../../core/services/user.service';
import { AlertService } from '../../../../core/ui/alert/alert.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private alertService: AlertService,
        private formService: FormService
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.userValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name: ['', Validators.required],
            firstName: ['', null],
            lastName: ['', null],
            email: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.register(this.getFormUser() as User)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.show('Registration successful');
                    this.router.navigate(['/']);
                },
                error => {
                    this.alertService.show(error);
                    this.loading = false;
                });
    }

    getFormUser() {
        const name = this.registerForm.get('name').value.split(' ', 2);

        return new Object({
            username: this.registerForm.get('email').value,
            password: this.registerForm.get('password').value,
            firstName: name[0],
            lastName: name[1]
        });
    }
}
