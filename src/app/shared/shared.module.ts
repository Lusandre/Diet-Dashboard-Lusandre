import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [SidebarComponent, TopbarComponent, FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [SidebarComponent, TopbarComponent, FooterComponent],
})
export class SharedModule {}
