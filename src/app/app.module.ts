import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_TOOLTIP_SCROLL_STRATEGY, MatTooltipModule } from '@angular/material/tooltip';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatTooltipModule,
    OverlayModule,
    ScrollingModule,
    MatDialogModule,
    MatMenuModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: MAT_TOOLTIP_SCROLL_STRATEGY,
      useFactory: (overlay: Overlay) => () => overlay.scrollStrategies.reposition(),
      deps: [Overlay],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
