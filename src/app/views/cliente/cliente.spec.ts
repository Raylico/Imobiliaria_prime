import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cliente } from './cliente.component';

describe('Cliente', () => {
  let component: Cliente;
  let fixture: ComponentFixture<Cliente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cliente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cliente);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
