import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaMenuRevisarComprasComponent } from './ruta-menu-revisar-compras.component';

describe('RutaMenuRevisarComprasComponent', () => {
  let component: RutaMenuRevisarComprasComponent;
  let fixture: ComponentFixture<RutaMenuRevisarComprasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaMenuRevisarComprasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaMenuRevisarComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
