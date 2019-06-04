import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaMenuSistemaOperativoComponent } from './ruta-menu-sistema-operativo.component';

describe('RutaMenuSistemaOperativoComponent', () => {
  let component: RutaMenuSistemaOperativoComponent;
  let fixture: ComponentFixture<RutaMenuSistemaOperativoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaMenuSistemaOperativoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaMenuSistemaOperativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
