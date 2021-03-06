import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route, PreloadAllModules } from '@angular/router';
import { fallbackRoute } from './shared/fallback-route';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';



const routes: Routes = [
  { path: '', redirectTo: '/form1', pathMatch: 'full' },
  {
    path: '', component: LayoutComponent,
    children: [{ path: 'dashboard', component: DashboardComponent },
    { path: 'cards', component: CardsComponent },
    { path: 'cards/:type', component: CardsComponent },
    {
      path: 'charts',
      loadChildren: './charts/charts.module#ChartsModule'
    },
    { path: 'form1', component: Form1Component },
    { path: 'form2', component: Form2Component }
    ]

  },

  { path: 'login', component: LoginComponent },
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true, useHash: true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
