import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { OccupancyComponent } from "./reports/occupancy.component";
import { DispenserComponent } from "./reports/dispenser.component";

@NgModule({
  declarations: [AppComponent, DashboardComponent, OccupancyComponent,
  DispenserComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
