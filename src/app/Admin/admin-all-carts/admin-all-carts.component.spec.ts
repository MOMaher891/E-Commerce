import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAllCartsComponent } from './admin-all-carts.component';

describe('AdminAllCartsComponent', () => {
  let component: AdminAllCartsComponent;
  let fixture: ComponentFixture<AdminAllCartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAllCartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAllCartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
