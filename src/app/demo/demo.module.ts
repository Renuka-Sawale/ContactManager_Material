import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons/buttons.component';
import { FlexboxComponent } from './flexbox/flexbox.component';

import { UiModule } from '../ui/ui.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : '', component: ButtonsComponent

  }
];

@NgModule({
  declarations: [
    ButtonsComponent,
    FlexboxComponent
  ],
  imports: [
    CommonModule,
    UiModule,
    RouterModule.forChild(routes)
  ],
  exports:[ButtonsComponent]
})
export class DemoModule { }
