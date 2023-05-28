import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaRevisionesComponent } from './tabla-revisiones.component';

describe('TablaRevisionesComponent', () => {
  let component: TablaRevisionesComponent;
  let fixture: ComponentFixture<TablaRevisionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaRevisionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaRevisionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
