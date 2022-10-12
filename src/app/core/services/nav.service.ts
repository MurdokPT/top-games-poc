import { Subject, Subscription } from "rxjs";
import { Injectable } from "@angular/core";
import { MockNav } from "./service.utils"

@Injectable()
export class NavService {
    private navSubscription: Subscription[] = []
    public navData$ = new Subject<any[]>();

    constructor() { }

    public fetchNav(): void {
        this.navData$.next(MockNav);
    }

    public cancelSubscriptions(): void {
        this.navSubscription.forEach(subscription => {
            subscription.unsubscribe();
        })
    }
}