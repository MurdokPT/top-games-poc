import { Subject, Subscription } from "rxjs";
import { Injectable } from "@angular/core";
import { MockGames, MockJackpots, MockJackpots2 } from "./service.utils";
import { Game, Jackpot } from "src/app/components/tp-home/tp-home.utils";

@Injectable()
export class GamesService {
    private gamesSubscription: Subscription[] = []
    public gamesData$ = new Subject<Game[]>();
    public jackpotsData$ = new Subject<Jackpot[]>();

    constructor() { }
    
    public fetchGames(): void {
        this.gamesData$.next(MockGames)
    }

    public fetchJackpots(): void {
        this.jackpotsData$.next(MockJackpots);
        //to simulate values of the jackpot to change with 2 different mocks generated.
        setInterval(()=> { this.jackpotsData$.next(MockJackpots)}, 6000);
        setTimeout(()=>{
            setInterval(()=> { this.jackpotsData$.next(MockJackpots2)}, 6000)
        },3000)
    }

    public cancelSubscriptions(): void {
        this.gamesSubscription.forEach(subscription => {
            subscription.unsubscribe();
        })
    }
}