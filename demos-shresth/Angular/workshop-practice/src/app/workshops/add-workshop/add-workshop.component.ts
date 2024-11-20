import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkshopsService } from '../workshops.service';
import { ToastService } from '../../common/toast/toast.service';
import { ISessions, IWorkshop } from '../models/IWorkshop';
import { start } from '@popperjs/core';
import { DatePipe } from '@angular/common';

function isValidStartEndDate(form: AbstractControl) {
  const startDate = (form.get('startDate') as AbstractControl).value;
  const endDate = (form.get('endDate') as AbstractControl).value;

  if (startDate === '' && endDate === '') return null;
  if (startDate !== '' && endDate === '')
    return {
      isValidStartEndDate: 'enter the End date',
    };
  if (endDate !== '' && startDate === '')
    return {
      isValidStartEndDate: 'enter EndDate',
    };
  if (startDate > endDate)
    return {
      isValidStartEndDate: 'Start Date should not be greater than EndDate',
    };
  return null;
}

function isinPersonOnline(form: AbstractControl) {
  const inPerson = form.get('inPerson') as AbstractControl;
  const online = form.get('online') as AbstractControl;
  if (inPerson.value === false && online.value === false) {
    return {
      isinPersonOnline: 'Select any one of the modes',
    };
  }
  return null;
}

@Component({
  selector: 'app-add-workshop',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-workshop.component.html',
  styleUrl: './add-workshop.component.scss',
  providers: [DatePipe],
})
export class AddWorkshopComponent implements OnInit {
  buttonMessage = 'Add Workshop';
  id!: number;
  workshopDetails!: IWorkshop;
  addWorkshopForm!: FormGroup;

  ngOnInit(): void {
    this.workshopsService.getWorkshopdDetails(this.id).subscribe({
      next: (workshop) => {
        this.workshopDetails = { ...workshop, id: this.id };
        this.workshopDetails.startDate =
          this.datePipe.transform(
            this.workshopDetails.startDate,
            'yyyy-MM-dd'
          ) || '';
        this.workshopDetails.endDate =
          this.datePipe.transform(this.workshopDetails.endDate, 'yyyy-MM-dd') ||
          '';
        this.addWorkshopForm.patchValue(this.workshopDetails);
      },
    });
  }

  constructor(
    private fb: FormBuilder,
    private activateroute: ActivatedRoute,
    private router: Router,
    private workshopsService: WorkshopsService,
    private toastService: ToastService,
    private datePipe: DatePipe
  ) {
    if (this.activateroute.snapshot.paramMap.get('id') === null) {
      this.buttonMessage = 'Add Workshop';
    } else {
      this.id = +(this.activateroute.snapshot.paramMap.get('id') as string);
      this.buttonMessage = 'Edit Workshop';
    }
    this.addWorkshopForm = this.fb.group(
      {
        name: ['', [Validators.required]],
        category: ['', [Validators.required]],
        description: ['', [Validators.required]],
        startDate: ['', [Validators.required]],
        endDate: ['', [Validators.required]],
        time: ['', [Validators.required]],
        location: this.fb.group({
          address: ['', [Validators.required]],
          city: ['', [Validators.required]],
          state: ['', [Validators.required]],
        }),
        modes: this.fb.group(
          {
            inPerson: this.fb.control(false),
            online: this.fb.control(false),
          },
          { validators: isinPersonOnline }
        ),
        imageUrl: ['', [Validators.required]],
      },
      {
        validators: isValidStartEndDate,
      }
    );
  }
  addingWorkshop() {
    const newWorkshop = { ...this.addWorkshopForm.value } as Omit<
      IWorkshop,
      'id'
    >;
    console.log(newWorkshop);
    this.workshopsService.addWorkshop(newWorkshop).subscribe({
      next: (addedworkshop) => {
        this.toastService.add({
          message: `Added session with id = ${addedworkshop.name}`,
          className: 'success',
          duration: 5000,
        });
        alert(`Added session with id = ${addedworkshop.name}`);
        this.router.navigate(['/workshops']);
      },
      error: (error) => {
        this.toastService.add({
          message: `unable to add the session - ${error.message}`,
          className: 'danger',
          duration: 5000,
        });
      },
    });
    return;
  }

  editWorkshop() {
    const edditedWorkshop = { ...this.addWorkshopForm.value } as Omit<
      IWorkshop,
      'id'
    >;
    this.workshopsService.addWorkshop(edditedWorkshop, this.id).subscribe({
      next: (edited) => {
        console.log(edited);
        this.toastService.add({
          message: `Updated session with id = ${edited.name}`,
          className: 'success',
          duration: 5000,
        });
        alert(`Updated session with id = ${edited.name}`);
        this.router.navigate(['/workshops']);
      },
      error: (error) => {
        this.toastService.add({
          message: `unable to add the session - ${error.message}`,
          className: 'danger',
          duration: 5000,
        });
      },
    });
  }
  addWorkshop() {
    if (this.activateroute.snapshot.paramMap.get('id') === null) {
      this.addingWorkshop();
      return;
    }
    this.editWorkshop();
  }
}
