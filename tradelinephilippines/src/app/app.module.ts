import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatDatepickerModule, MatInputModule, MatNativeDateModule, MatProgressSpinnerModule, MatSelectModule, MatTabsModule, MatToolbarModule} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TradeStatisticsComponent } from './trade-statistics/trade-statistics.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './test/test.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { AutoCompleteModule } from '@progress/kendo-angular-dropdowns';
import { ComboBoxModule } from '@progress/kendo-angular-dropdowns';


@NgModule({
  declarations: [
    AppComponent,
    TradeStatisticsComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatTabsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    DropDownsModule,
    ComboBoxModule,
    // MatDatepicker
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
