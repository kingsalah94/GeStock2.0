import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvellCmdCltFrsComponent } from './nouvell-cmd-clt-frs.component';

describe('NouvellCmdCltFrsComponent', () => {
  let component: NouvellCmdCltFrsComponent;
  let fixture: ComponentFixture<NouvellCmdCltFrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvellCmdCltFrsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvellCmdCltFrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
