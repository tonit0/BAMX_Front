import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaFallasComponent } from './tabla-fallas.component';

describe('TablaFallasComponent', () => {
  let component: TablaFallasComponent;
  let fixture: ComponentFixture<TablaFallasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaFallasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaFallasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
