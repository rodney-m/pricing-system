import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KeyToZbChangeTableComponent } from './key-to-zb-change-table.component';

describe('KeyToZbChangeTableComponent', () => {
  let component: KeyToZbChangeTableComponent;
  let fixture: ComponentFixture<KeyToZbChangeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KeyToZbChangeTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(KeyToZbChangeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
