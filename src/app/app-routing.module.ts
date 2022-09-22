import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:"" , pathMatch:"full", redirectTo:"login"},
  {path:"login" , component:LoginComponent},
  {path:"home" , component:HomeComponent , canActivate:[AuthGuard]},
  {path:"register" , component:RegisterComponent },
  {path:"contacts-page" , component:ContactsPageComponent,canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
