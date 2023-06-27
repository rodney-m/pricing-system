import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewBankPageComponent } from './view-bank-page.component';

describe('ViewBankPageComponent', () => {
  let component: ViewBankPageComponent;
  let fixture: ComponentFixture<ViewBankPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewBankPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewBankPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
