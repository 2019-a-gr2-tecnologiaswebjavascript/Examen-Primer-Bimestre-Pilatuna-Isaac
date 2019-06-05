import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaCajeroComponent } from './ruta-cajero.component';

describe('RutaCajeroComponent', () => {
  let component: RutaCajeroComponent;
  let fixture: ComponentFixture<RutaCajeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaCajeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaCajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
