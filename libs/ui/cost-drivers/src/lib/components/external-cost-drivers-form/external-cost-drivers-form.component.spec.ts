import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExternalCostDriversFormComponent } from './external-cost-drivers-form.component';

describe('ExternalCostDriversFormComponent', () => {
  let component: ExternalCostDriversFormComponent;
  let fixture: ComponentFixture<ExternalCostDriversFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExternalCostDriversFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExternalCostDriversFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
