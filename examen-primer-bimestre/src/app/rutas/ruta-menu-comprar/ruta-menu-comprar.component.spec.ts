import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaMenuComprarComponent } from './ruta-menu-comprar.component';

describe('RutaMenuComprarComponent', () => {
  let component: RutaMenuComprarComponent;
  let fixture: ComponentFixture<RutaMenuComprarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaMenuComprarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaMenuComprarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
