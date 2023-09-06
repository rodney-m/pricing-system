import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ZbPricesListComponent } from './zb-prices-list.component';

describe('ZbPricesListComponent', () => {
  let component: ZbPricesListComponent;
  let fixture: ComponentFixture<ZbPricesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ZbPricesListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ZbPricesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
