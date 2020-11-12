import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/core/shared/material.module';
import { DemoComponent } from './demo.component';
import { DialogComponent } from './one-time-password/components/dialog/dialog.component';
import { OneTimePasswordComponent } from './one-time-password/one-time-password.component';

const routes: Routes = [
  {
    path: '',
    component: DemoComponent,
  },
  {
    path: 'otp',
    component: OneTimePasswordComponent,
  },
];

@NgModule({
  declarations: [DemoComponent, OneTimePasswordComponent, DialogComponent],
  imports: [
    RouterModule.forChild(routes),

    CommonModule,
    FlexLayoutModule,
    MaterialModule,
  ],
})
export class DemoModule {}
