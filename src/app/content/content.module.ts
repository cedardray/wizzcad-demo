import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentPageComponent } from './pages/content-page/content-page.component';
import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './components/content/content.component';
import { MenuComponent } from '../menu/components/menu/menu.component';
import { MenuModule } from '../menu/menu.module';
import { PaginationComponent } from './components/pagination/pagination.component';



@NgModule({
  declarations: [
    ContentPageComponent,
    ContentComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    ContentRoutingModule,
    MenuModule
  ]
})
export class ContentModule { }
