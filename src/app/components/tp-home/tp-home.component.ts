import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { GamesService } from 'src/app/core/services/games.service';
import { Game } from './tp-home.utils';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-tp-home',
  templateUrl: './tp-home.component.html',
  styleUrls: ['./tp-home.component.scss']
})
export class TpHomeComponent implements OnInit, OnDestroy {
  private subscriptionList: Subscription[] = [];
  public gamesData!: Game[];

  constructor(
    private gamesService: GamesService,
    private router: Router,
    private currencyPipe: CurrencyPipe
  ) {
    this.subscriptionList.push(this.gamesService.gamesData$.subscribe(data => {
      const filter = this.router.url.slice(1);
      (this.router.url !== '/')
        ? this.gamesData = data.filter(game => {
          if (filter === 'other') {
            return game.categories.includes('ball') || game.categories.includes('fun') || game.categories.includes('virtual');
          }
          return game.categories.includes(filter)
        }
        )
        : this.gamesData = data;
    }));

    this.subscriptionList.push(this.gamesService.jackpotsData$.subscribe(data => {
      data.forEach(jackpot => {
        const index = this.gamesData.findIndex(game => game.id === jackpot.game);
        (this.gamesData[index])
          ? this.gamesData[index].jackpot = this.currencyPipe.transform(jackpot.amount)
          : null;
      })
    }))
  }

  ngOnInit(): void {
    this.gamesService.fetchGames();
    this.gamesService.fetchJackpots();
  }

  ngOnDestroy(): void {
    this.gamesService.cancelSubscriptions();
    this.subscriptionList.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
  public checkRibbon(game: Game, type: string): boolean {
    if (type === 'new') {
      if (game.categories.includes('new') && this.router.url !== '/new') {
        return true;
      } else {
        return false;
      }
    } else {
      if (game.categories.includes('top') && !game.categories.includes('new') && this.router.url !== '/top') {
        return true;
      } else if (game.categories.includes('top') && game.categories.includes('new') && this.router.url === '/new') {
        return true;
      } else {
        return false;
      }
    }
  }
}
