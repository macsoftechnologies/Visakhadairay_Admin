import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ThemeModule } from "../@theme/theme.module";
import { NbButtonModule, NbCardModule, NbInputModule, NbMenuModule, NbSelectModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { BccComponent } from './bcc/bcc.component';
import { HeadquatersComponent } from './headquaters/headquaters.component';



@NgModule({
    declarations: [
        AdminComponent,
        DashboardComponent,
        BccComponent,
        HeadquatersComponent
    ],
    imports: [
        CommonModule,
        AdminRoutingModule,
        ThemeModule,
        NbMenuModule,
        NbCardModule,
        NbButtonModule,
        NbInputModule,
        NbSelectModule,
        ReactiveFormsModule
    ]
})
export class AdminModule { }
