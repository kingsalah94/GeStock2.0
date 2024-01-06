import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCommandClientFournisseurComponent } from './details-command-client-fournisseur.component';

describe('DetailsCommandClientFournisseurComponent', () => {
  let component: DetailsCommandClientFournisseurComponent;
  let fixture: ComponentFixture<DetailsCommandClientFournisseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsCommandClientFournisseurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsCommandClientFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
