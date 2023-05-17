import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioConfiguracionesComponent } from './usuario-configuraciones.component';

describe('UsuarioConfiguracionesComponent', () => {
  let component: UsuarioConfiguracionesComponent;
  let fixture: ComponentFixture<UsuarioConfiguracionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioConfiguracionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioConfiguracionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
