import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { IAvatarStyle, IOperator, IWorkOrder } from '../helper';

@Component({
  selector: 'app-work-order',
  templateUrl: './work-order.component.html',
  styleUrls: ['./work-order.component.less']
})

export class WorkOrderComponent implements OnInit {

  public ticket?: IWorkOrder;

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .pipe()
      .subscribe(params  => {
        const ticketId = params.get('id');
        this.ticket = JSON.parse(localStorage.getItem(ticketId));
      });
  }

  avatarStyle(operator: IOperator): IAvatarStyle {
    return {background: `url(${operator.image}) center/100% no-repeat`};
  }

  checked(checked: boolean, location) {
    let message = `${location.name} marked as sanitized`;
    if (!checked) {
      message = `${location.name} marked as not sanitized`;
    }
    this.onSuccess(message);
  }

  onSuccess(message) {
    this.snackBar.open(message, null, {
      duration: 2000,
    });
  }
}
