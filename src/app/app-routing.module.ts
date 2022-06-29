import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './contact-manager/components/main-content/main-content.component';
import { ButtonsComponent } from './demo/buttons/buttons.component'
import { FlexboxComponent } from './demo/flexbox/flexbox.component';

const routes: Routes = [
  { path: 'demo', loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)},
  { path: 'contact-manager/:id', component: MainContentComponent},
  { path: 'flexbox', component: FlexboxComponent},
  { path: '**', redirectTo:'flexbox'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
