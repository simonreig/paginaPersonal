import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if(screen.width<=1200){
      this.col  = '';
      this.cont = 'container'; 
    }
  }

  col : string = 'col-5';
  cont: string = 'container';

  descripcion: string = `Soy desarrollador web Front-end y técnico en informática personal y profesional. Tengo 22 años, actualmente estoy cursando 3er año en ingeniería en sistemas. Aprendo de mis errores cada día, me gusta hacer deportes como tenis y salir a correr llevando
  una vida saludable.`;

  objetivo: string = `Mi objetivo es brindar lo mejor de mí, tanto en lo personal como en lo profesional, dispuesto a superar desafíos adaptándome a nuevas formas de trabajo. Abierto a nuevas oportunidades, comprometido y perseverante.`;
}
