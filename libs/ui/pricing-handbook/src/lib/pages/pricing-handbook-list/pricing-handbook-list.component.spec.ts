import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PricingHandbookListComponent } from './pricing-handbook-list.component';

describe('PricingHandbookListComponent', () => {
  let component: PricingHandbookListComponent;
  let fixture: ComponentFixture<PricingHandbookListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PricingHandbookListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PricingHandbookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
