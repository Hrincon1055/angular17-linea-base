import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { LayoutService } from '../../infraestructure/ui/app.layout.service';
import { PrimengModule } from '../../primeng/primeng.module';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-web-layout',
  standalone: true,
  imports: [CommonModule, PrimengModule, HeaderComponent, FooterComponent],
  templateUrl: './web-layout.component.html',
  styleUrls: ['./web-layout.component.scss'],
})
export class WebLayoutComponent {
  constructor(
    public layoutService: LayoutService,
    private _location: Location
  ) {}
  public get containerClass(): any {
    return {
      'layout-theme-light': this.layoutService.config.colorScheme === 'light',
      'layout-theme-dark': this.layoutService.config.colorScheme === 'dark',
      'layout-overlay': this.layoutService.config.menuMode === 'overlay',
      'layout-static': this.layoutService.config.menuMode === 'static',
      'layout-static-inactive':
        this.layoutService.state.staticMenuDesktopInactive &&
        this.layoutService.config.menuMode === 'static',
      'layout-overlay-active': this.layoutService.state.overlayMenuActive,
      'layout-mobile-active': this.layoutService.state.staticMenuMobileActive,
      'p-input-filled': this.layoutService.config.inputStyle === 'filled',
      'p-ripple-disabled': !this.layoutService.config.ripple,
    };
  }

  public goBack(): void {
    this._location.back();
  }
}
