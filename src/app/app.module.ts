import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingleSelectComponent } from './single-select/single-select.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { TextInputComponent } from './text-input/text-input.component';
import { GdUserComponent } from './gd-user/gd-user.component';
import { GdComponent } from './gd/gd.component';
import { GdFacilitatorComponent } from './gd-facilitator/gd-facilitator.component';
import { HttpClientModule } from '@angular/common/http';
import { ScreenService } from './screen.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrioritiesComponent } from './priorities/priorities.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SingleSelectResultComponent } from './single-select-result/single-select-result.component';
import { MultiSelectResultComponent } from './multi-select-result/multi-select-result.component';
import { SsFeeedbackComponent } from './ss-feeedback/ss-feeedback.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleSelectComponent,
    NavigationComponent,
    FooterComponent,
    MultiSelectComponent,
    TextInputComponent,
    GdUserComponent,
    GdComponent,
    GdFacilitatorComponent,
    PrioritiesComponent,
    SingleSelectResultComponent,
    MultiSelectResultComponent,
    SsFeeedbackComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,

  ],
  providers: [
    ScreenService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
