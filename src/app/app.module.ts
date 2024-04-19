import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './secciones/menu/menu.component';
import { PieComponent } from './secciones/pie/pie.component';
import { InicioComponent } from './secciones/inicio/inicio.component';
import { SobrenosotrosComponent } from './secciones/sobrenosotros/sobrenosotros.component';
import { GaleriaComponent } from './secciones/galeria/galeria.component';
import { ListadoproductosComponent } from './secciones/listadoproductos/listadoproductos.component';
import { ContactoComponent } from './secciones/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PieComponent,
    InicioComponent,
    SobrenosotrosComponent,
    GaleriaComponent,
    ListadoproductosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
