import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentPageComponent } from './pages/content-page/content-page.component';
import { GuardService } from '../shared/guard/guard.service';

const routes: Routes = [
  { path: '', component: ContentPageComponent, canActivate: [GuardService] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
