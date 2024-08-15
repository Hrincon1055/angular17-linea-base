import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { LayoutService } from '../../infraestructure/ui/app.layout.service';
import { MenuService } from '../../infraestructure/ui/app.menu.service';
@Component({
  selector: '[app-menuitem]',
  standalone: true,
  imports: [HttpClientModule, RouterModule, CommonModule],
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  animations: [
    trigger('children', [
      state(
        'collapsed',
        style({
          height: '0',
        })
      ),
      state(
        'expanded',
        style({
          height: '*',
        })
      ),
      transition(
        'collapsed <=> expanded',
        animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')
      ),
    ]),
  ],
})
export class MenuItemComponent implements OnInit, OnDestroy {
  @Input() public item: any;
  @Input() public index!: number;
  @Input() @HostBinding('class.layout-root-menuitem') root!: boolean;
  @Input() public parentKey!: string;
  public active = false;
  public menuSourceSubscription: Subscription;
  public menuResetSubscription: Subscription;
  public key: string = '';

  constructor(
    public layoutService: LayoutService,
    private cd: ChangeDetectorRef,
    public router: Router,
    private menuService: MenuService
  ) {
    this.menuSourceSubscription = this.menuService.menuSource$?.subscribe(
      (value) => {
        Promise.resolve(null).then(() => {
          if (value.routeEvent) {
            this.active =
              value.key === this.key || value.key.startsWith(this.key + '-')
                ? true
                : false;
          } else {
            if (
              value.key !== this.key &&
              !value.key.startsWith(this.key + '-')
            ) {
              this.active = false;
            }
          }
        });
      }
    );

    this.menuResetSubscription = this.menuService.resetSource$.subscribe(() => {
      this.active = false;
    });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((params) => {
        if (this.item?.routerLink) {
          this.updateActiveStateFromRoute();
        }
      });
  }

  ngOnInit() {
    this.key = this.parentKey
      ? this.parentKey + '-' + this.index
      : String(this.index);

    if (this.item?.routerLink) {
      this.updateActiveStateFromRoute();
    }
  }

  public updateActiveStateFromRoute(): void {
    let activeRoute = this.router.isActive(this.item.routerLink[0], {
      paths: 'exact',
      queryParams: 'ignored',
      matrixParams: 'ignored',
      fragment: 'ignored',
    });

    if (activeRoute) {
      this.menuService.onMenuStateChange({ key: this.key, routeEvent: true });
    }
  }

  public itemClick(event: Event): void {
    if (this.item.disabled) {
      event.preventDefault();
      return;
    }
    if (this.item.command) {
      this.item.command({ originalEvent: event, item: this.item });
    }
    if (this.item.items) {
      this.active = !this.active;
    }
    this.menuService.onMenuStateChange({ key: this.key });
  }

  public get submenuAnimation() {
    return this.root ? 'expanded' : this.active ? 'expanded' : 'collapsed';
  }

  @HostBinding('class.active-menuitem')
  public get activeClass(): boolean {
    return this.active && !this.root;
  }

  public ngOnDestroy(): void {
    if (this.menuSourceSubscription) {
      this.menuSourceSubscription.unsubscribe();
    }
    if (this.menuResetSubscription) {
      this.menuResetSubscription.unsubscribe();
    }
  }
}
