import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';

import {HomeComponent} from './home.component';
import {SharedModule} from '../shared/shared.module';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MenubarModule} from "primeng/menubar";
import {ToastModule} from "primeng/toast";
import {MenuModule} from "primeng/menu";
import {ButtonModule} from "primeng/button";
import {MessageService} from "primeng/api";

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, SharedModule, HomeRoutingModule, MatToolbarModule, MatButtonModule, MatIconModule,
    MatMenuModule, MenubarModule, ToastModule, MenuModule, ButtonModule],
  providers: [MessageService]
})
export class HomeModule {
}
