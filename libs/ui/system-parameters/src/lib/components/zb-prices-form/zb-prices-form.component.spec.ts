import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZbPricesFormComponent } from './zb-prices-form.component';

describe('ZbPricesFormComponent', () => {
  let component: ZbPricesFormComponent;
  let fixture: ComponentFixture<ZbPricesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZbPricesFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZbPricesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
