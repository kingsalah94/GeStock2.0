import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-utilisateur',
  templateUrl: './page-utilisateur.component.html',
  styleUrls: ['./page-utilisateur.component.css']
})
export class PageUtilisateurComponent implements OnInit {

  constructor(private router:Router) { }


  nouvellUtilisateur():void {
  this.router.navigate(['nouvellUtilisateur']);
}


  ngOnInit(): void {
  }

}
