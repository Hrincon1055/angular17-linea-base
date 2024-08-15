import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../infraestructure/ui/app.layout.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(public layoutService: LayoutService) {}
  ngOnInit(): void {}
}
