import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VolumesListComponent } from './volumes-list.component';

describe('VolumesListComponent', () => {
  let component: VolumesListComponent;
  let fixture: ComponentFixture<VolumesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VolumesListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VolumesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
