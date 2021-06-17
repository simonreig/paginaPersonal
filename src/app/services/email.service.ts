import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

url: string ='https://formspree.io/f/xoqywpww';




  enviarMail(emisorNombre:string, emisorEmail:string, receptor:string, asunto:string, mensaje:string){
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post(this.url,{emisorNombre,emisorEmail,receptor,asunto,mensaje},{ headers });
  }


}
