import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CostDriverViewComponent } from './cost-driver-view.component';

describe('CostDriverViewComponent', () => {
  let component: CostDriverViewComponent;
  let fixture: ComponentFixture<CostDriverViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CostDriverViewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CostDriverViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
