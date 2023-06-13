import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaRutasComponent } from './tabla-rutas.component';

describe('TablaRutasComponent', () => {
  let component: TablaRutasComponent;
  let fixture: ComponentFixture<TablaRutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaRutasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaRutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
