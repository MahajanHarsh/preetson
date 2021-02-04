import { Component } from "@angular/core";

interface Environment {
  id: Number;

  name: String;

  value: Number;

  battery: Number;

  lastUpdated: String;
}

@Component({
  selector: "app-env",
  templateUrl: "./env.component.html",
  styleUrls: ["./env.component.css"]
})
export class EnvComponent {
  environmentData = [
    {
      id: 100,
      name: "S1_LHS_RR",
      value: 10,
      battery: 70,
      lastUpdated: "02/04/2021:11:58"
    },
    {
      id: 101,
      name: "S2_LHS_RR",
      value: 50,
      battery: 60,
      lastUpdated: "02/04/2021:11:58"
    },
    {
      id: 102,
      name: "S3_LHS_RR",
      value: 100,
      battery: 30,
      lastUpdated: "02/04/2021:11:58"
    },
    {
      id: 103,
      name: "S4_LHS_RR",
      value: 75,
      battery: 90,
      lastUpdated: "02/04/2021:11:58"
    }
  ];

  environmentDatas: Environment[] = this.environmentData;
}
