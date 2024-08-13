import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportHelperComponent } from './report-helper.component';

describe('ReportHelperComponent', () => {
  let component: ReportHelperComponent;
  let fixture: ComponentFixture<ReportHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportHelperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
