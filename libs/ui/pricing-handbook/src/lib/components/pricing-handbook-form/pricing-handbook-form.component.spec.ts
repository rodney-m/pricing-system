import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PricingHandbookFormComponent } from './pricing-handbook-form.component';

describe('PricingHandbookFormComponent', () => {
  let component: PricingHandbookFormComponent;
  let fixture: ComponentFixture<PricingHandbookFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PricingHandbookFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PricingHandbookFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
