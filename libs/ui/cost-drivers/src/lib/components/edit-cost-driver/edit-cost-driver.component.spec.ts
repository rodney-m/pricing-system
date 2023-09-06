import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditCostDriverComponent } from './edit-cost-driver.component';

describe('EditCostDriverComponent', () => {
  let component: EditCostDriverComponent;
  let fixture: ComponentFixture<EditCostDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditCostDriverComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditCostDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
