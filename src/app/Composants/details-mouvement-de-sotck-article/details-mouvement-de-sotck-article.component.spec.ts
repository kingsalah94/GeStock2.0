import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMouvementDeSotckArticleComponent } from './details-mouvement-de-sotck-article.component';

describe('DetailsMouvementDeSotckArticleComponent', () => {
  let component: DetailsMouvementDeSotckArticleComponent;
  let fixture: ComponentFixture<DetailsMouvementDeSotckArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsMouvementDeSotckArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsMouvementDeSotckArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
