import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortofioliComponent } from './portofioli.component';

describe('PortofioliComponent', () => {
  let component: PortofioliComponent;
  let fixture: ComponentFixture<PortofioliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortofioliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortofioliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
