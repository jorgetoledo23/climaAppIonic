import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CiudadInfoPage } from './ciudad-info.page';

describe('CiudadInfoPage', () => {
  let component: CiudadInfoPage;
  let fixture: ComponentFixture<CiudadInfoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CiudadInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
