import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-commande-client-founisseur',
  templateUrl: './page-commande-client-founisseur.component.html',
  styleUrls: ['./page-commande-client-founisseur.component.css']
})
export class PageCommandeClientFounisseurComponent implements OnInit {
  constructor(private router: Router) { }


nouvelCommande():void {
this.router.navigate(['nouvellCommandClient']);
}


  ngOnInit(): void {
  }

}
