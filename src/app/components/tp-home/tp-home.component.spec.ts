import { CurrencyPipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { GamesService } from 'src/app/core/services/games.service';

import { TpHomeComponent } from './tp-home.component';

describe('TpHomeComponent', () => {
  let component: TpHomeComponent;
  let fixture: ComponentFixture<TpHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [ TpHomeComponent ],
      providers: [GamesService, CurrencyPipe ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TpHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
