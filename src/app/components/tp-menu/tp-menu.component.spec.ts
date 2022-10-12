import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { GamesService } from 'src/app/core/services/games.service';
import { NavService } from 'src/app/core/services/nav.service';

import { TpMenuComponent } from './tp-menu.component';

describe('TpMenuComponent', () => {
  let component: TpMenuComponent;
  let fixture: ComponentFixture<TpMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [TpMenuComponent],
      providers: [GamesService, NavService],
    })
      .compileComponents();

    fixture = TestBed.createComponent(TpMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
