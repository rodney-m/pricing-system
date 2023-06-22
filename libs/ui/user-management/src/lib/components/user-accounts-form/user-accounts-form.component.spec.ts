import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserAccountsFormComponent } from './user-accounts-form.component';

describe('UserAccountsFormComponent', () => {
  let component: UserAccountsFormComponent;
  let fixture: ComponentFixture<UserAccountsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserAccountsFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserAccountsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
