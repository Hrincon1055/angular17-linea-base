import { Component, ElementRef } from '@angular/core';
import { LayoutService } from '../../infraestructure/ui/app.layout.service';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  constructor(public LayoutService: LayoutService, public el: ElementRef) {}
}
