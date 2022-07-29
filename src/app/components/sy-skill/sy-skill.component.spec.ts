import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SySkillComponent } from './sy-skill.component';

describe('SySkillComponent', () => {
  let component: SySkillComponent;
  let fixture: ComponentFixture<SySkillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SySkillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SySkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
