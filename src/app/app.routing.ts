import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SafeplaceComponent } from './safeplace/safeplace.component';
import { AboutComponent } from './about/about.component';
const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },

  {
    path: 'safeplace',
    component: SafeplaceComponent
  }
]



export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
