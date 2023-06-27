import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CostDriversListPageComponent } from './cost-drivers-list-page.component';

describe('CostDriversListPageComponent', () => {
  let component: CostDriversListPageComponent;
  let fixture: ComponentFixture<CostDriversListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CostDriversListPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CostDriversListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
