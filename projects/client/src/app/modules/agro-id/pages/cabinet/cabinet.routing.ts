import { Routes, RouterModule } from '@angular/router';
import { CabinetComponent } from './cabinet.component';
import { LegalPersonComponent } from './pages/legal-person/legal-person.component';
import { MainComponent } from './pages/main/main.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: CabinetComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: MainComponent },
      { path: 'personal', component: PersonalComponent },
      { path: 'legalperson', component: LegalPersonComponent },
      {
        path: 'busines-card',
        loadChildren: () =>
          import('./modules/business-card/business-card.module').then(
            (m) => m.BusinessCardModule
          ),
      },
      { path: 'settings', component: SettingsComponent },
    ],
  },
];

export const CabinetRoutes = RouterModule.forChild(routes);
