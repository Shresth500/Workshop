import { Component, OnInit } from '@angular/core';
import { IWorkshop, ISessions } from '../models/IWorkshop';
import { WorkshopsService } from '../workshops.service';
import { ActivatedRoute } from '@angular/router';
import { LoadingSpinnerComponent } from '../../common/loading-spinner/loading-spinner.component';
import { ErrorAlertComponent } from '../../common/error-alert/error-alert.component';
import { DatePipe } from '@angular/common';
import { LocationPipe } from '../../common/location/location.pipe';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCheckCircle,
  faTimesCircle,
} from '@fortawesome/free-regular-svg-icons';

import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-workshops-details-component',
  standalone: true,
  imports: [
    LoadingSpinnerComponent,
    ErrorAlertComponent,
    DatePipe,
    LocationPipe,
    CommonModule,
    FontAwesomeModule,
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
  ],
  templateUrl: './workshops-details-component.component.html',
  styleUrl: './workshops-details-component.component.scss',
})
export class WorkshopsDetailsComponentComponent implements OnInit {
  icons = {
    faCheckCircle,
    faTimesCircle,
  };
  error: Error | null = null;
  params!: number | null;
  workshops_details!: IWorkshop;
  loading = true;
  Sessions!: ISessions;
  constructor(
    private w: WorkshopsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (Params) => {
        const queryStr = Params.get('id');
        if (queryStr === null) {
          this.params = 1;
        } else {
          this.params = +queryStr;
        }
        this.getWorkshopdetails();
      },
    });
  }

  getWorkshopdetails() {
    if (this.params) {
      this.w.getWorkshopdDetails(this.params).subscribe({
        next: (workshop_details) => {
          this.loading = false;
          this.workshops_details = workshop_details;
        },
        error: (error) => {
          this.error = error;
          this.loading = false;
        },
      });
    }
  }
  getIconForMode(mode: 'inPerson' | 'online') {
    return this.workshops_details.modes[mode]
      ? this.icons.faCheckCircle
      : this.icons.faTimesCircle;
  }
}
