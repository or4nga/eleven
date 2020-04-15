import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './Options.component.html',
  styleUrls: ['./Options.component.less']
})
export class OptionsComponent implements OnInit {

  public buildings = [];
  public floors = [];
  public types = [];
  public usages = [
    '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'
  ];
  public defaults = [
    'End of day', 'Every other day', 'Every week'
  ];
  public selectedBuilding?: unknown;
  public selectedFloor?: unknown;
  public selectedType?: unknown;
  public selectedUsage?: string;
  public selectedDefault?: string;

  constructor() {}

  ngOnInit(): void {
    this.buildings = [{id: 1, name: 'Main Building'}, {id: 2, name: 'Secondary Building'}];
  }
}
