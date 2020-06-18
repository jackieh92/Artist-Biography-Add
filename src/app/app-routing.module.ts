import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistbioComponent } from './artistbio/artistbio.component';
import { ShellComponent } from './shared/shell/shell.component';
import { GorillazComponent } from './gorillaz/gorillaz.component';
import { SofitukkerComponent } from './sofitukker/sofitukker.component';
import { TheblackkeysComponent } from './theblackkeys/theblackkeys.component';
import { JimmyhendrixComponent } from './jimmyhendrix/jimmyhendrix.component';
import { ThewhitestripesComponent } from './thewhitestripes/thewhitestripes.component';


const routes: Routes = [
  {
    path: 'artistbio', component: ArtistbioComponent
  },
  {
    path: 'shared', component: ShellComponent
  },
  {
    path: 'gorillaz', component: GorillazComponent
  },
  {
    path: 'sofitukker', component: SofitukkerComponent
  },
  {
    path: 'theblackkeys', component: TheblackkeysComponent
  },
  {
    path: 'jimmyhendrix', component: JimmyhendrixComponent
  },
  {
    path: 'thewhitestripes', component: ThewhitestripesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
