import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SystemParametersContainerComponent } from './system-parameters-container.component';

describe('SystemParametersContainerComponent', () => {
  let component: SystemParametersContainerComponent;
  let fixture: ComponentFixture<SystemParametersContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SystemParametersContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SystemParametersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
