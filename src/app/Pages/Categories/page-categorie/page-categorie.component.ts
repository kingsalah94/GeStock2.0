import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-categorie',
  templateUrl: './page-categorie.component.html',
  styleUrls: ['./page-categorie.component.css']
})
export class PageCategorieComponent implements OnInit {
  constructor(private router: Router) { }


  nouvelCategorie():void {
  this.router.navigate(['nouvelcategory'])
}


  ngOnInit(): void {
  }

}
