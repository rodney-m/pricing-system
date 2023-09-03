import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadActivityExcelComponent } from './upload-activity-excel.component';

describe('UploadActivityExcelComponent', () => {
  let component: UploadActivityExcelComponent;
  let fixture: ComponentFixture<UploadActivityExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadActivityExcelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UploadActivityExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
