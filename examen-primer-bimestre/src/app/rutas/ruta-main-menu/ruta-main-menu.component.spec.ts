import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaMainMenuComponent } from './ruta-main-menu.component';

describe('RutaMainMenuComponent', () => {
  let component: RutaMainMenuComponent;
  let fixture: ComponentFixture<RutaMainMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaMainMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
