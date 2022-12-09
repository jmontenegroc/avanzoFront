import { Component, OnInit } from '@angular/core';
import { ClientService } from './client.service';
import { Cliente } from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {
  cliente!: Cliente
  enviado: Boolean = false;
  constructor(private clientService: ClientService) { }

  enviar(doc:string){
    console.log("enviando");
    this.enviado = true;
    this.clientService.getClient(doc).subscribe((cliente) => {this.cliente = cliente});
  }
  ngOnInit() {
  }

}
