import { DragDropModule } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { es } from '../assets/i18n/es';
import { PrimengModule } from './primeng/primeng.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimengModule, DragDropModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mf-shell';
  constructor(private _config: PrimeNGConfig) {
    const lang = es;
    this._config.setTranslation(lang);
    this._config.ripple = true;
  }
}
