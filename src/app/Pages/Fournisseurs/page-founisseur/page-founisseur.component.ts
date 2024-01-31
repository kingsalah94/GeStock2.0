import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-founisseur',
  templateUrl: './page-founisseur.component.html',
  styleUrls: ['./page-founisseur.component.css']
})
export class PageFounisseurComponent implements OnInit {



  constructor(private router: Router) { }

nouvelFounisseur(): void {
this.router.navigate(['nouveaufournisseur']);
}

  ngOnInit(): void {
  }

}
