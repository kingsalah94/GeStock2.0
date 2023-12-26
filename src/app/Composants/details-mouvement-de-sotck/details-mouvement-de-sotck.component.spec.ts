import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMouvementDeSotckComponent } from './details-mouvement-de-sotck.component';

describe('DetailsMouvementDeSotckComponent', () => {
  let component: DetailsMouvementDeSotckComponent;
  let fixture: ComponentFixture<DetailsMouvementDeSotckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsMouvementDeSotckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsMouvementDeSotckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
