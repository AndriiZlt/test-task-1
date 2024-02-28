import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckboxConfigurableExample } from '../components/checkbox/checkbox-confifurable-example';
import { AutocompleteComponent } from '../components/autocomplete/autocomplete.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DemoMaterialModule } from './material-module';
import { DatepickerComponent } from '../components/datepicker/datepicker.component';
import { FormfieldComponent } from '../components/formfield/formfield.component';
import { InputComponent } from '../components/input/input.component';
import { RadiobtnComponent } from '../components/radiobtn/radiobtn.component';
import { SelectComponent } from '../components/select/select.component';
import { SliderComponent } from '../components/slider/slider.component';
import { ToggleComponent } from '../components/toggle/toggle.component';
import { MenuComponent } from '../components/menu/menu.component';
import { StepperComponent } from '../components/stepper/stepper.component';
import { GridComponent } from '../components/grid/grid.component';
import { ListComponent } from '../components/list/list.component';
import { TreeComponent } from '../components/tree/tree.component';
import { ExpansionPanelComponent } from '../components/expansion-panel/expansion-panel.component';
import { ButtonsComponent } from '../components/buttons/buttons.component';
import { ButtonToggleComponent } from '../components/button-toggle/button-toggle.component';
import { BadgeComponent } from '../components/badge/badge.component';
import { SpinnerComponent } from '../components/spinner/spinner.component';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar.component';
import {
  DialogComponent,
  DialogComponent2,
} from '../components/dialog/dialog.component';
import { PaginationComponent } from '../components/pagination/pagination.component';
import { TableComponent } from '../components/table/table.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
  ],
  entryComponents: [
    AppComponent,
    CheckboxConfigurableExample,
    AutocompleteComponent,
    DatepickerComponent,
    FormfieldComponent,
    InputComponent,
    RadiobtnComponent,
    SelectComponent,
    SliderComponent,
    ToggleComponent,
    MenuComponent,
    StepperComponent,
    GridComponent,
    ListComponent,
    TreeComponent,
    ExpansionPanelComponent,
    ButtonsComponent,
    ButtonToggleComponent,
    BadgeComponent,
    SpinnerComponent,
    ProgressBarComponent,
    DialogComponent,
    DialogComponent2,
    PaginationComponent,
    TableComponent,
  ],
  declarations: [
    AppComponent,
    CheckboxConfigurableExample,
    AutocompleteComponent,
    DatepickerComponent,
    FormfieldComponent,
    InputComponent,
    RadiobtnComponent,
    SelectComponent,
    SliderComponent,
    ToggleComponent,
    MenuComponent,
    StepperComponent,
    GridComponent,
    ListComponent,
    TreeComponent,
    ExpansionPanelComponent,
    ButtonsComponent,
    ButtonToggleComponent,
    BadgeComponent,
    SpinnerComponent,
    ProgressBarComponent,
    DialogComponent,
    DialogComponent2,
    PaginationComponent,
    TableComponent,
  ],
  bootstrap: [
    AppComponent,
    CheckboxConfigurableExample,
    AutocompleteComponent,
    DatepickerComponent,
    FormfieldComponent,
    InputComponent,
    RadiobtnComponent,
    SelectComponent,
    SliderComponent,
    ToggleComponent,
    MenuComponent,
    StepperComponent,
    GridComponent,
    ListComponent,
    TreeComponent,
    ExpansionPanelComponent,
    ButtonsComponent,
    ButtonToggleComponent,
    BadgeComponent,
    SpinnerComponent,
    ProgressBarComponent,
    DialogComponent,
    PaginationComponent,
    TableComponent,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
  ],
})
export class AppModule {}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
