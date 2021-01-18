import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'paises',pathMatch:'full'},
  { path: 'paises', loadChildren: () => import('./pages/paises/paises.module').then(m => m.PaisesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
