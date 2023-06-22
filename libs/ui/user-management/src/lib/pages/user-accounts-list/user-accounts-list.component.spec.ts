import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserAccountsListComponent } from './user-accounts-list.component';

describe('UserAccountsListComponent', () => {
  let component: UserAccountsListComponent;
  let fixture: ComponentFixture<UserAccountsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserAccountsListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserAccountsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
