import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemosComponent } from './demos.component';
import { TranslateModule } from '@ngx-translate/core';

describe('DemosComponent', () => {
  let component: DemosComponent;
  let fixture: ComponentFixture<DemosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemosComponent ],
      imports: [
        TranslateModule.forRoot()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
