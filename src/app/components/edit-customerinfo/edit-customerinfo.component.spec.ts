import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCustomerinfoComponent } from './edit-customerinfo.component';

describe('EditCustomerinfoComponent', () => {
  let component: EditCustomerinfoComponent;
  let fixture: ComponentFixture<EditCustomerinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCustomerinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCustomerinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
