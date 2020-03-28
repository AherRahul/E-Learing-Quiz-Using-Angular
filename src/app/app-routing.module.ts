import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GdUserComponent } from './gd-user/gd-user.component';
import { GdFacilitatorComponent } from './gd-facilitator/gd-facilitator.component';
import { SingleSelectComponent } from './single-select/single-select.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { TextInputComponent } from './text-input/text-input.component';
import { PrioritiesComponent } from './priorities/priorities.component';
import { SingleSelectResultComponent } from './single-select-result/single-select-result.component';
import { MultiSelectResultComponent } from './multi-select-result/multi-select-result.component';
import { SsFeeedbackComponent } from './ss-feeedback/ss-feeedback.component';

const routes: Routes = [
  { path: 'user', component: GdUserComponent },
  { path: 'facilitator', component: GdFacilitatorComponent },
  { path : 'user/question1', component: SingleSelectComponent},
  { path: 'user/question2', component : MultiSelectComponent},
  { path: 'user/question3', component : TextInputComponent},
  { path: 'user/question4', component : PrioritiesComponent},
  { path: 'facilitator/ssresult', component : SingleSelectResultComponent },
  { path: 'facilitator/msresult', component : MultiSelectResultComponent },
  { path: 'facilitator/ssrfeedback', component : SsFeeedbackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
