import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-profil',
  templateUrl: './page-profil.component.html',
  styleUrls: ['./page-profil.component.css']
})
export class PageProfilComponent implements OnInit {
  
  constructor(private router:Router) { }
  
  ModifierMotDePase():void {
  this.router.navigate(['changemotdepasse']);
  }
  ngOnInit(): void {
  }

}
