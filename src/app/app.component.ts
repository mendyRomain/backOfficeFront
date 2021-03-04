import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  navs: Array<any>;

  constructor() {
    this.sideMenu();
  }


  sideMenu(){
    this.navs=[
      {name:'Home',
      path:'home'},
      // {
      //   name:'Photos',
      //   path:'tabs'
      // }, 
      {
        name:'Contact',
        path:'contact'
      },
      {
        name:'Commande',
        path:'commande'
      }
    ]
  }
}
