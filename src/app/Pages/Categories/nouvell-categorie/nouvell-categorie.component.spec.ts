import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvellCategorieComponent } from './nouvell-categorie.component';

describe('NouvellCategorieComponent', () => {
  let component: NouvellCategorieComponent;
  let fixture: ComponentFixture<NouvellCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvellCategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvellCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
