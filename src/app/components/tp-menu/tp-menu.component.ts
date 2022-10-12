import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavService } from 'src/app/core/services/nav.service';
import { Menu } from './tp-menu.utils';

@Component({
  selector: 'tp-menu',
  templateUrl: './tp-menu.component.html',
  styleUrls: ['./tp-menu.component.scss']
})
export class TpMenuComponent implements OnInit, OnDestroy {
  private subscription!: Subscription;
  public navData!: Menu[];
  public isOpen!: boolean;

  constructor(
    private navService: NavService) {
    this.subscription = this.navService.navData$.subscribe(data => {
      this.navData = data;
    });
  }

  ngOnInit(): void {
    this.navService.fetchNav();
  }

  ngOnDestroy(): void {
    this.navService.cancelSubscriptions();
    this.subscription.unsubscribe();
  }
}
