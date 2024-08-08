import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketsListComponent } from './tickets-list/tickets-list.component';
import { AddTicketComponent  } from './add-ticket/add-ticket.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './Auth/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard], data: { roles: ['admin'] } },
  { path: 'tickets', component: TicketsListComponent, canActivate: [AuthGuard] },
  { path: 'tickets/:id', component: AddTicketComponent , canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
