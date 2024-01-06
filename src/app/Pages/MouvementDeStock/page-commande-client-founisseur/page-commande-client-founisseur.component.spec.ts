import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCommandeClientFounisseurComponent } from './page-commande-client-founisseur.component';

describe('PageCommandeClientFounisseurComponent', () => {
  let component: PageCommandeClientFounisseurComponent;
  let fixture: ComponentFixture<PageCommandeClientFounisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageCommandeClientFounisseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCommandeClientFounisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
