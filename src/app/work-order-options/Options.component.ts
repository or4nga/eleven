import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {IBuilding, IFloor, ISpaceType, backendUrl, usages, frequencies, ITiming, IWorkOrder} from '../helper';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-options',
  templateUrl: './Options.component.html',
  styleUrls: ['./Options.component.less']
})

export class OptionsComponent implements OnInit {

  public buildings: IBuilding[] = [];
  public floors: IFloor[] = [];
  public types: ISpaceType[] = [];
  public usages = usages;
  public frequencies = frequencies;
  public selectedBuilding?: IBuilding;
  public selectedFloor?: IFloor;
  public selectedType?: ISpaceType;
  public selectedUsage?: ITiming;
  public selectedFrequency?: ITiming;
  private ticket?: IWorkOrder;

  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private http: HttpClient,
  ) {}

  ngOnInit(): void {
    this.http.get(`${backendUrl}/buildings`).subscribe((res: any) => {
      this.buildings = res.buildings;
    });
  }

  submit(): void {
    this.http.post(
      `${backendUrl}/createTicket/${this.selectedBuilding.id}/${this.selectedFloor.id}`,
      null,
      {
        params: {
          spaceType: this.selectedType.id.toString(),
          usage: this.selectedUsage.value,
          frequency: this.selectedFrequency.value,
        }
      }
    )
    .subscribe((res: IWorkOrder) => {
      localStorage.setItem(res.orderNumber.toString(), JSON.stringify(res));
      this.ticket = res;
      this.onSuccess();
    });
  }

  disableSubmit(): boolean {
    return !this.selectedBuilding || !this.selectedFloor || !this.selectedType || !this.selectedUsage || !this.selectedFrequency;
  }

  onSuccess() {
    this.snackBar
      .open('Automatic service request generated', 'Preview', {
      duration: 5000,
    })
      .onAction()
      .subscribe(() => this.router.navigateByUrl(`/workorder/${this.ticket.orderNumber}`));
    this.selectedBuilding = undefined;
    this.selectedFloor = undefined;
    this.selectedType = undefined;
    this.selectedUsage = undefined;
    this.selectedFrequency = undefined;
  }
}
