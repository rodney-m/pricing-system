import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CostAllocationFormComponent } from './cost-allocation-form.component';

describe('CostAllocationFormComponent', () => {
  let component: CostAllocationFormComponent;
  let fixture: ComponentFixture<CostAllocationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CostAllocationFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CostAllocationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
