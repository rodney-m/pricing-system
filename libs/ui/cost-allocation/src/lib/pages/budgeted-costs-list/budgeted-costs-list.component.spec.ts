import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BudgetedCostsListComponent } from './budgeted-costs-list.component';

describe('BudgetedCostsListComponent', () => {
  let component: BudgetedCostsListComponent;
  let fixture: ComponentFixture<BudgetedCostsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BudgetedCostsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BudgetedCostsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
