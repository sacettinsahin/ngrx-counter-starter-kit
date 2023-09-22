import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevRoutingModule } from './dev-routing.module';
import { BirinciComponent } from './birinci/birinci.component';
import { IkinciComponent } from './ikinci/ikinci.component';
import { SharedModule } from '../shared/shared.module';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [
    BirinciComponent,
    IkinciComponent,
    PageComponent
  ],
  imports: [
    CommonModule,
    DevRoutingModule,
    SharedModule
  ]
})
export class DevModule { }
