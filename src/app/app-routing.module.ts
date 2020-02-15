import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ButtonsComponent } from './components/components/buttons/buttons.component';
import { CardsComponent } from './components/components/cards/cards.component';
import { ColorsComponent } from './components/utilities/colors/colors.component';
import { BordersComponent } from './components/utilities/borders/borders.component';
import { AnimationsComponent } from './components/utilities/animations/animations.component';
import { OtherComponent } from './components/utilities/other/other.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { ForgotPasswordComponent } from './components/pages/forgot-password/forgot-password.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { BlankComponent } from './components/pages/blank/blank.component';
import { ChartsComponent } from './components/charts/charts.component';
import { TablesComponent } from './components/tables/tables.component';


const routes: Routes = [
  { path:'dashboard', component: DashboardComponent },
  { path:'buttons', component: ButtonsComponent },
  { path:'cards', component: CardsComponent },
  { path:'colors', component: ColorsComponent },
  { path:'borders', component: BordersComponent },
  { path:'animations', component: AnimationsComponent },
  { path:'other', component: OtherComponent },
  { path:'login', component: LoginComponent },
  { path:'register', component: RegisterComponent },
  { path:'forgotpassword', component: ForgotPasswordComponent },
  { path:'pagenotfound', component: PageNotFoundComponent },
  { path:'blank', component: BlankComponent },
  { path:'charts', component: ChartsComponent },
  { path:'tables', component: TablesComponent },
  { path: '',  pathMatch: 'full', redirectTo: 'dashboard' },
  { path: '**',  pathMatch: 'full', redirectTo: 'pagenotfound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
