import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoaderService } from '../../infraestructure/ui/app.loader.service';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent {
  public loading!: boolean;
  constructor(private loaderService: LoaderService) {
    this.loaderService.isLoading.subscribe((loading) => {
      this.loading = loading;
    });
  }
}
