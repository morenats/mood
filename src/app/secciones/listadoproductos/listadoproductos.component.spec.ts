import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoproductosComponent } from './listadoproductos.component';

describe('ListadoproductosComponent', () => {
  let component: ListadoproductosComponent;
  let fixture: ComponentFixture<ListadoproductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListadoproductosComponent]
    });
    fixture = TestBed.createComponent(ListadoproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
