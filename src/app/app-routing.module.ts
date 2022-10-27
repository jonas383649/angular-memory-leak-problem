import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageOneComponent} from './page-one/page-one.component';
import {PageTwoComponent} from './page-two/page-two.component';
import {PageThreeComponent} from './page-three/page-three.component';

const appRoutes: Routes = [
  {
    path: 'page-one',
    component: PageOneComponent,
  },
  {
    path: 'page-two',
    component: PageTwoComponent,
  },
  {
    path: 'page-three',
    component: PageThreeComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
