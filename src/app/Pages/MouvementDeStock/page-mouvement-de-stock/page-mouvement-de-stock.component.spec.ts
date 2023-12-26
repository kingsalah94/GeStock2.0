import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMouvementDeStockComponent } from './page-mouvement-de-stock.component';

describe('PageMouvementDeStockComponent', () => {
  let component: PageMouvementDeStockComponent;
  let fixture: ComponentFixture<PageMouvementDeStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMouvementDeStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMouvementDeStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
