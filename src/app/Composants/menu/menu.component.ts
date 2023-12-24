import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router) { }

  public menuProperties: Array<Menu> = [
    {
    id:'1',
    titre:'Tableau de bord',
    icon:'fas fa-chart-line',
    url:'',
    sousMenu:[
      {
      id:'11',
      titre:'Vue d\'ensemble',
      icon:'fas fa-chart-pie',
      url:'',
      },
      {
      id:'12',
      titre:'Statistique',
      icon:'fas fa-chart-bar',
      url:'statistiques',
      },
    ]
  },
  {
    id:'2',
    titre:'Articles',
    icon:'fas fa-boxes',
    url:'',
    sousMenu:[
      {
      id:'21',
      titre:'Articles',
      icon:'fas fa-boxes',
      url:'',
      },
      {
      id:'22',
      titre:'Mouvement de Stock',
      icon:'fab fa-stack-overflow',
      url:'',
      },
    ]
  },
  {
    id:'3',
    titre:'Clients',
    icon:'fas fa-users',
    url:'',
    sousMenu:[
      {
      id:'31',
      titre:'Client',
      icon:'fas fa-users',
      url:'',
      },
      {
      id:'32',
      titre:'Commande Client',
      icon:'fas fa-shopping-basket',
      url:'',
      },
    ]
  },
  {
    id:'4',
    titre:'Fournisseurs',
    icon:'fas fa-users',
    url:'',
    sousMenu:[
      {
      id:'41',
      titre:'Fournisseur',
      icon:'fas fa-users',
      url:'',
      },
      {
      id:'42',
      titre:'Commande Fournisseur',
      icon:'fas fa-truck',
      url:'',
      },
    ]
  },
  {
    id:'5',
    titre:'Parametrages',
    icon:'fas fa-cog',
    url:'',
    sousMenu:[
      {
      id:'51',
      titre:'Categories',
      icon:'fas fa-tools',
      url:'',
      },
      {
      id:'52',
      titre:'Utilisateur',
      icon:'fas fa-user-cog',
      url:'',
      },
    ]
  }
  ];

  ngOnInit(): void {
  }

  navigate(url?: string): void {
    this.router.navigate([url]);
  }

}
