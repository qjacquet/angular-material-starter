import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SidenavComponent } from './sidenav.component';
import { NavCollapsableComponent } from './sidenav/collapsable/collapsable.component';
import { NavGroupComponent } from './sidenav/group/group.component';
import { NavItemComponent } from './sidenav/item/item.component';
import { RouterModule } from '@angular/router';
import { MaterialColorPickerModule } from '../material-color-picker/material-color-picker.module';


@NgModule({
  declarations: [
    SidenavComponent,
    NavCollapsableComponent,
    NavGroupComponent,
    NavItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
    MaterialColorPickerModule
  ],
  exports: [SidenavComponent]
})
export class SidenavModule { }
