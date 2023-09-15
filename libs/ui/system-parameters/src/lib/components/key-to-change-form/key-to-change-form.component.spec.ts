import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KeyToChangeFormComponent } from './key-to-change-form.component';

describe('KeyToChangeFormComponent', () => {
  let component: KeyToChangeFormComponent;
  let fixture: ComponentFixture<KeyToChangeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KeyToChangeFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(KeyToChangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
