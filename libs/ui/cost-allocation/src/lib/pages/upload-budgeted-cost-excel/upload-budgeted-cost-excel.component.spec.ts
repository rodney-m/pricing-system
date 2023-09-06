import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadBudgetedCostExcelComponent } from './upload-budgeted-cost-excel.component';

describe('UploadBudgetedCostExcelComponent', () => {
  let component: UploadBudgetedCostExcelComponent;
  let fixture: ComponentFixture<UploadBudgetedCostExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadBudgetedCostExcelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UploadBudgetedCostExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
