import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bouton-action',
  templateUrl: './bouton-action.component.html',
  styleUrls: ['./bouton-action.component.css']
})
export class BoutonActionComponent implements OnInit {

  @Output()
  clickEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  buttonNouvellClick(): void{
    this.clickEvent.emit();
  }

}
