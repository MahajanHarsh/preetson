import { Component } from "@angular/core";

interface Dispenser {
  id: Number;

  name: String;

  level: Number;

  battery: Number;

  lastUpdated: String;
}

@Component({
  selector: "app-dispenser",
  templateUrl: "./dispenser.component.html",
  styleUrls: ["./dispenser.component.css"]
})
export class DispenserComponent {
  dispenserData = [
    {
      id: 100,
      name: "S1_LHS_RR",
      level: 10,
      battery: 70,
      lastUpdated: "02/04/2021:11:58"
    },
    {
      id: 101,
      name: "S2_LHS_RR",
      level: 50,
      battery: 70,
      lastUpdated: "02/04/2021:11:58"
    },
    {
      id: 102,
      name: "S3_LHS_RR",
      level: 100,
      battery: 70,
      lastUpdated: "02/04/2021:11:58"
    },
    {
      id: 103,
      name: "S4_LHS_RR",
      level: 75,
      battery: 70,
      lastUpdated: "02/04/2021:11:58"
    }
  ];

  dispensers: Dispenser[] = this.dispenserData;
}
