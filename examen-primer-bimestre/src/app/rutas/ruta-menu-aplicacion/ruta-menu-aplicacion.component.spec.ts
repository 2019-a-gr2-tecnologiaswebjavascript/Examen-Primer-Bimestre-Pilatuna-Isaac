import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaMenuAplicacionComponent } from './ruta-menu-aplicacion.component';

describe('RutaMenuAplicacionComponent', () => {
  let component: RutaMenuAplicacionComponent;
  let fixture: ComponentFixture<RutaMenuAplicacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaMenuAplicacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaMenuAplicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
