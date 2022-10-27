import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthvGuard } from './services/authv.guard';
import { TourCartComponent } from './tour-cart/tour-cart.component';
import { TourRequestsComponent } from './tour-requests/tour-requests.component';
import { CanDeactivateGuard } from './can-deactivate';
const routes: Routes = [
  
  { path: "login", component: LoginComponent },
  { path: "", component: HomeComponent },
  { path: "tour-cart/:id", component: TourCartComponent, canDeactivate:[CanDeactivateGuard] },
  { path: "tour-requests", component: TourRequestsComponent ,canActivate: [AuthvGuard] },
  { path: "**", component: NotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
