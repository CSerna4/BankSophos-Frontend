import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsListComponent } from './clients-list/clients-list.component';
import { CreateClientComponent } from './create-client/create-client.component';

const routes: Routes = [
{path: 'clients', component: ClientsListComponent},
{path:'', redirectTo: 'clients', pathMatch:'full'},
{path:'create-client', component: CreateClientComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
