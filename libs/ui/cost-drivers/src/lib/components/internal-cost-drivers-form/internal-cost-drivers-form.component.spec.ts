import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InternalCostDriversFormComponent } from './internal-cost-drivers-form.component';

describe('InternalCostDriversFormComponent', () => {
  let component: InternalCostDriversFormComponent;
  let fixture: ComponentFixture<InternalCostDriversFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InternalCostDriversFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InternalCostDriversFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
