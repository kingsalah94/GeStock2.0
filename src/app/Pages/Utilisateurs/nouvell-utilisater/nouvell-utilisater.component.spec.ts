import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvellUtilisaterComponent } from './nouvell-utilisater.component';

describe('NouvellUtilisaterComponent', () => {
  let component: NouvellUtilisaterComponent;
  let fixture: ComponentFixture<NouvellUtilisaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvellUtilisaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvellUtilisaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
