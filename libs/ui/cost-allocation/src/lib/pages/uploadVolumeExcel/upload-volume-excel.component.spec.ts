import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadVolumeExcelComponent } from './upload-volume-excel.component';

describe('UploadVolumeExcelComponent', () => {
  let component: UploadVolumeExcelComponent;
  let fixture: ComponentFixture<UploadVolumeExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UploadVolumeExcelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UploadVolumeExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
