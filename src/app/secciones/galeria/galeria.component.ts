import { Component } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {
  mostrars=false
  mostraro=false
  mostrarn=false
  cardsseptiembre=[1,2,3,4,5,6];
  cardsoctubre=[1,2,3,4,5,6];
  cardsnoviembre=[1,2,3,4,5,6];
  titulos=["NAFTA","AUTENTICOS DECADENTES","USTED SEÑALEMELO","VIRUS","ALEJANDRO LERNER","KOINO YOKAN"];
  tituloo=["CEREBROS AUSENTES","EL SOLDADO","VIEJAS LOCAS","MARILINA BERTOLDI","FLEMA","EL KUELGUE"];
  titulon=["ACRU","FITO PAEZ","LOS MENTIROSOS","C.R.O","GAUCHITO CLUB","CTM"];
  estados=[false,false,false,false,false,false];
  estadoo=[false,false,false,false,false,false];
  estadon=[false,false,false,false,false,false];
  fechas=["7 de septiembre 2023","8 de septiembre","14 de septiembre","16 de septiembre","21 de septiembre","28 de septiembre"];
  fechao=["6 de octubre","12 de octubre","14 de octubre","19 de octubre","6 de octubre","6 de octubre"];
  fechan=["3 de noviembre","4 de noviembre","11 de noviembre","18 de noviembre","25 de noviembre","26 de noviembre"];
  hora=["21:00hs","21:00hs","21:00hs","21:00hs","21:00hs","21:00hs"];
  lugarsyo=["Mood Live, Neuquén","Mood Live, Neuquén","Mood Live, Neuquén","Mood Live, Neuquén","Mood Live, Neuquén","Mood Live, Neuquén"];
  lugarn=["Espacio DUAM, Neuquén","Mood Live, Neuquén","Mood Live, Neuquén","Mood Live, Neuquén","Mood Live, Neuquén"];
  info=["Menos info","Mas info"]
  valoress=[1,1,1,1,1,1]
  valoreso=[1,1,1,1,1,1]
  valoresn=[1,1,1,1,1,1]
}
