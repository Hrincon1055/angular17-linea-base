import { NgModule } from '@angular/core';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { AvatarModule } from 'primeng/avatar';
import { BlockUIModule } from 'primeng/blockui';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { ChipsModule } from 'primeng/chips';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';
import { InputMaskModule } from 'primeng/inputmask';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { KnobModule } from 'primeng/knob';
import { ListboxModule } from 'primeng/listbox';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';
import { OrderListModule } from 'primeng/orderlist';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PaginatorModule } from 'primeng/paginator';
import { PanelMenuModule } from 'primeng/panelmenu';
import { PasswordModule } from 'primeng/password';
import { PickListModule } from 'primeng/picklist';
import { ProgressBarModule } from 'primeng/progressbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SidebarModule } from 'primeng/sidebar';
import { SkeletonModule } from 'primeng/skeleton';
import { SliderModule } from 'primeng/slider';
import { SplitButtonModule } from 'primeng/splitbutton';
import { StepsModule } from 'primeng/steps';
import { StyleClassModule } from 'primeng/styleclass';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { TabViewModule } from 'primeng/tabview';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { TimelineModule } from 'primeng/timeline';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { TreeModule } from 'primeng/tree';
import { TreeTableModule } from 'primeng/treetable';
let modulesPrimen = [
  AvatarModule,
  AutoCompleteModule,
  BlockUIModule,
  ButtonModule,
  CalendarModule,
  CardModule,
  CarouselModule,
  CascadeSelectModule,
  CheckboxModule,
  ChipModule,
  ChipsModule,
  ColorPickerModule,
  ConfirmDialogModule,
  ContextMenuModule,
  DataViewModule,
  DialogModule,
  DividerModule,
  DropdownModule,
  GalleriaModule,
  ImageModule,
  InputMaskModule,
  InputNumberModule,
  InputSwitchModule,
  InputTextareaModule,
  InputTextModule,
  KnobModule,
  ListboxModule,
  MegaMenuModule,
  MenubarModule,
  MenuModule,
  MessageModule,
  MessagesModule,
  MultiSelectModule,
  OrderListModule,
  OverlayPanelModule,
  PaginatorModule,
  PanelMenuModule,
  PasswordModule,
  PickListModule,
  ProgressBarModule,
  RadioButtonModule,
  RatingModule,
  RippleModule,
  ScrollPanelModule,
  SelectButtonModule,
  SidebarModule,
  SkeletonModule,
  SliderModule,
  SplitButtonModule,
  StepsModule,
  StyleClassModule,
  TableModule,
  TabMenuModule,
  TabViewModule,
  TieredMenuModule,
  TimelineModule,
  ToastModule,
  ToggleButtonModule,
  TooltipModule,
  TreeModule,
  TreeTableModule,
  ToolbarModule,
];
@NgModule({
  imports: [...modulesPrimen],
  exports: [...modulesPrimen],
  providers: [],
})
export class PrimengModule {}
