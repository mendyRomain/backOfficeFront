import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { Client } from '../model/client';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  clientList:Client[]=[];
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getAllClient();
  }

  getAllClient(){
    this.clientService.getAllClient().subscribe(datas => {
      this.clientList =datas;
      console.log(this.clientList)
    },error =>{console.log(error)}
  );
  }

}
