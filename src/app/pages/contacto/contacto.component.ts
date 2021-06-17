import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(private emailService: EmailService) { }

  ngOnInit(): void {
  }

  emisorEmail:string='';
  emisorNombre:string='';
  asunto:string='';
  receptor:string='simonreig@gmail.com'
  mensaje:string='';

enviarMail(f:NgForm){
  if(f.invalid){
    return;
  }
  this.emailService.enviarMail(this.emisorNombre,this.emisorEmail,this.receptor,this.asunto,this.mensaje).subscribe(
  resp=>{
    Swal.fire({
      title:'Mail enviado correctamente',
      icon:'success'
    })
  }
  );
}

}
