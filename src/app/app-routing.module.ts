import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './secciones/inicio/inicio.component';
import { GaleriaComponent } from './secciones/galeria/galeria.component';
import { ListadoproductosComponent } from './secciones/listadoproductos/listadoproductos.component';
import { ContactoComponent } from './secciones/contacto/contacto.component';
import { SobrenosotrosComponent } from './secciones/sobrenosotros/sobrenosotros.component';

const routes: Routes = [
  {
    path:"",component:InicioComponent
  },
  {
    path:"inicio",component:InicioComponent
  },
  {
    path:"galeria",component:GaleriaComponent
  },
  {
    path:"listadoproductos",component:ListadoproductosComponent
  },
  {
    path:"contacto",component:ContactoComponent
  },
  {
    path:"nosotros",component:SobrenosotrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
