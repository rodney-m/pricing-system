import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CostDriversTableComponent } from './cost-drivers-table.component';

describe('CostDriversTableComponent', () => {
  let component: CostDriversTableComponent;
  let fixture: ComponentFixture<CostDriversTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CostDriversTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CostDriversTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
