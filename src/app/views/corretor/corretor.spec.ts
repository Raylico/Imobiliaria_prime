import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Corretor } from './corretor.component';

describe('Corretor', () => {
  let component: Corretor;
  let fixture: ComponentFixture<Corretor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Corretor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Corretor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
