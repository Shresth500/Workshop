import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopsDetailsComponentComponent } from './workshops-details-component.component';

describe('WorkshopsDetailsComponentComponent', () => {
  let component: WorkshopsDetailsComponentComponent;
  let fixture: ComponentFixture<WorkshopsDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkshopsDetailsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkshopsDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
