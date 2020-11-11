import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Config } from 'protractor';
import { navigation, Navigation } from '../../config/navigation';
import { User } from '../../models/user';
import { AuthenticationService } from '../../services/authentication.service';
import { ThemeService } from '../../services/theme.service';
import { AlertService } from '../alert/alert.service';
import { SidenavService } from './sidenav.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  items: Navigation[];
  currentUser: User;

  @Input() config: Config;

  constructor(
    private sideNavService: SidenavService,
    private themeService: ThemeService,
    private authenticationService: AuthenticationService,
    public dialog: MatDialog,
    public alertService: AlertService
  ) {
    this.authenticationService.user.subscribe(u => {
      this.currentUser = u;
    });
  }

  ngOnInit() {
    this.items = navigation;
  }

  hide() {
    this.sideNavService.close();
  }

  toggleDarkMode() {
    this.themeService.setReverse();
  }

  setTheme(themeClass: string) {
    this.themeService.setTheme(themeClass);
  }

  getAvatar() {
    return null;
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {
        this.currentUser.profile.avatarBase64 = reader.result.toString();
      };
      this.authenticationService.user.subscribe(u => {
        this.alertService.show('Profile picture updated');
      },
        e => {
          this.alertService.show(e);
        });
    }
  }

  openAvatarDialog() {
  }

  disconnect() {
    this.authenticationService.logout();
  }

}
