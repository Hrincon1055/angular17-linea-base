import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
/**
 * Interfaz que define la estructura de la configuración de la aplicación.
 */
export interface AppConfig {
  inputStyle: string;
  colorScheme: string;
  theme: string;
  ripple: boolean;
  menuMode: string;
  scale: number;
}
/**
 * Interfaz que define el estado del diseño de la aplicación.
 */
interface LayoutState {
  staticMenuDesktopInactive: boolean;
  overlayMenuActive: boolean;
  profileSidebarVisible: boolean;
  configSidebarVisible: boolean;
  staticMenuMobileActive: boolean;
  menuHoverActive: boolean;
}
/**
 * Servicio inyectable que gestiona la configuración y el estado de diseño de la aplicación.
 */
@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  /**
   * Descripción: Configuración predeterminada de la aplicación.
   */
  public config: AppConfig = {
    ripple: false,
    inputStyle: 'outlined',
    menuMode: 'static',
    colorScheme: 'light',
    theme: 'lara-light-indigo',
    scale: 14,
  };
  /**
   * Descripción: Estado del diseño de la aplicación.
   */
  public state: LayoutState = {
    staticMenuDesktopInactive: false,
    overlayMenuActive: false,
    profileSidebarVisible: false,
    configSidebarVisible: false,
    staticMenuMobileActive: false,
    menuHoverActive: false,
  };
  /**
   * Descripción: Sujeto para emitir eventos de actualización de la configuración.
   */
  private configUpdate = new Subject<AppConfig>();
  /**
   * Descripción: Sujeto para emitir eventos de apertura del menú de superposición.
   */
  private overlayOpen = new Subject<any>();
  /**
   * Descripción: Observable para suscribirse a eventos de actualización de la configuración.
   */
  public configUpdate$ = this.configUpdate.asObservable();
  /**
   * Descripción: Observable para suscribirse a eventos de apertura del menú de superposición.
   */
  public overlayOpen$ = this.overlayOpen.asObservable();
  /**
   * Descripción: Método para manejar la acción de alternar el menú.
   */
  public onMenuToggle(): void {
    if (this.isOverlay()) {
      this.state.overlayMenuActive = !this.state.overlayMenuActive;
      if (this.state.overlayMenuActive) {
        this.overlayOpen.next(null);
      }
    }
    if (this.isDesktop()) {
      this.state.staticMenuDesktopInactive =
        !this.state.staticMenuDesktopInactive;
    } else {
      this.state.staticMenuMobileActive = !this.state.staticMenuMobileActive;
      if (this.state.staticMenuMobileActive) {
        this.overlayOpen.next(null);
      }
    }
  }
  /**
   * Descripción: Método para mostrar/ocultar la barra lateral de perfil.
   */
  public showProfileSidebar(): void {
    this.state.profileSidebarVisible = !this.state.profileSidebarVisible;
    if (this.state.profileSidebarVisible) {
      this.overlayOpen.next(null);
    }
  }
  /**
   * Descripción: Método para mostrar la barra lateral de configuración.
   */
  public showConfigSidebar(): void {
    this.state.configSidebarVisible = true;
  }
  /**
   * Descripción: Método para verificar si el menú es de superposición.
   * @returns Booleano que indica si el menú es de superposición.
   */
  public isOverlay(): boolean {
    return this.config.menuMode === 'overlay';
  }
  /**
   * Descripción: Método para verificar si la aplicación se ejecuta en un dispositivo de escritorio.
   * @returns Booleano que indica si la aplicación se ejecuta en un dispositivo de escritorio.
   */
  public isDesktop(): boolean {
    return window.innerWidth > 991;
  }
  /**
   * Descripción: Método para verificar si la aplicación se ejecuta en un dispositivo móvil.
   * @returns Booleano que indica si la aplicación se ejecuta en un dispositivo móvil.
   */
  public isMobile(): boolean {
    return !this.isDesktop();
  }
  /**
   * Descripción: Método para emitir eventos de actualización de la configuración.
   */
  public onConfigUpdate(): void {
    this.configUpdate.next(this.config);
  }
}
