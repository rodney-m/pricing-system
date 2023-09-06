import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZbPriceListTableComponent } from './zb-price-list-table.component';

describe('ZbPriceListTableComponent', () => {
  let component: ZbPriceListTableComponent;
  let fixture: ComponentFixture<ZbPriceListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZbPriceListTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZbPriceListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
