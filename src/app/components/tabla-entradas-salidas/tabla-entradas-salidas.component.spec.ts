import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaEntradasSalidasComponent } from './tabla-entradas-salidas.component';

describe('TablaEntradasSalidasComponent', () => {
  let component: TablaEntradasSalidasComponent;
  let fixture: ComponentFixture<TablaEntradasSalidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaEntradasSalidasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaEntradasSalidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
