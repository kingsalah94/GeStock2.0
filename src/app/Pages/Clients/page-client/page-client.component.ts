import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-client',
  templateUrl: './page-client.component.html',
  styleUrls: ['./page-client.component.css']
})
export class PageClientComponent implements OnInit {

  constructor(
    private router:Router
  ) { }
nouveauClient(): void {
this,this.router.navigate(['nouveauclient']);
}

  

  ngOnInit(): void {
  }

}
