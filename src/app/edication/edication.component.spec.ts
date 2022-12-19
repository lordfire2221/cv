import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicationComponent } from './edication.component';

describe('EdicationComponent', () => {
  let component: EdicationComponent;
  let fixture: ComponentFixture<EdicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
