import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatImageSearchComponent } from './cat-image-search.component';

describe('CatImageSearchComponent', () => {
  let component: CatImageSearchComponent;
  let fixture: ComponentFixture<CatImageSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatImageSearchComponent]
    });
    fixture = TestBed.createComponent(CatImageSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
