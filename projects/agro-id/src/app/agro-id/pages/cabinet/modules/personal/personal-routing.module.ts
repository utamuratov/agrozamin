import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalComponent } from './components/personal/personal.component';
import { ProfileResolver } from './services/profile.resolve';

const routes: Routes = [
  {
    path: '',
    component: PersonalComponent,
    resolve: { profile: ProfileResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalRoutingModule {}
