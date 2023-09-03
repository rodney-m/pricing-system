import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CostAllocationListComponent } from './cost-allocation-list.component';

describe('CostAllocationListComponent', () => {
  let component: CostAllocationListComponent;
  let fixture: ComponentFixture<CostAllocationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CostAllocationListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CostAllocationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
