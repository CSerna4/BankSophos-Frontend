import { Component, OnInit } from '@angular/core';
import { Clients } from '../clients';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  clients : Clients[];

  constructor(private clientsService: ClientsService){}

  ngOnInit(): void {
    this.getList();  
}

private getList(){
  this.clientsService.getClients().subscribe(data => {
    this.clients = data;
  })
}




}
