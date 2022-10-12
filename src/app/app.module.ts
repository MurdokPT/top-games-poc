import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TpMenuComponent } from './components/tp-menu/tp-menu.component';
import { MaterialModule } from './core/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { NavService } from './core/services/nav.service';
import { TpHomeComponent } from './components/tp-home/tp-home.component';
import { GamesService } from './core/services/games.service';
import { CurrencyPipe  } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TpMenuComponent,
    TpHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  })
  ],
  providers: [
    NavService,
    GamesService,
    CurrencyPipe,
    {provide: DEFAULT_CURRENCY_CODE, useValue: 'GBP'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
