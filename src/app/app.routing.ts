import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {AgregarComponent} from "./components/agregar/agregar.component";
import {BuscarComponent} from "./components/buscar/buscar.component";
import {HomeComponent} from "./components/home/home.component";
import {EditarComponent} from "./components/editar/editar.component";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'buscar', component: BuscarComponent},
  {path: 'agregar', component: AgregarComponent},
  {path: 'editar', component: EditarComponent}
];

export const appRoutingProviders:any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
