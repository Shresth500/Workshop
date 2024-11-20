import { Component, NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
} from '@angular/forms'; // Import ReactiveFormsModule
import { JsonPipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ISessions } from '../../models/IWorkshop';
import { WorkshopsService } from '../../workshops.service';
import { ToastService } from '../../../common/toast/toast.service';

function durationAndLevel(form: AbstractControl) {
  const durationStr = (form.get('sequenceDuration') as AbstractControl).value;
  const duration = +durationStr;
  const level = (form.get('Level') as AbstractControl).value;

  // if valid -> return null
  // if invalid -> return an object with the details of the error. Further this object should have the property called `durationAndLevel`

  if (durationStr === '' || level === '') {
    return null;
  }

  if (level === 'Basic') {
    return null;
  }

  if (level === 'Intermediate') {
    if (duration >= 2) {
      return null;
    }

    // error
    return {
      durationAndLevel:
        'Intermediate level session should be at least 2 hours in duration',
    };
  }

  if (level === 'Advanced') {
    if (duration >= 3) {
      return null;
    }

    // error
    return {
      durationAndLevel:
        'Advanced level session should be at least 3 hours in duration',
    };
  }

  return null;
}

@Component({
  selector: 'app-add-sessions',
  standalone: true,
  imports: [
    //BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    JsonPipe,
    CommonModule,
  ],
  templateUrl: './add-sessions.component.html',
  styleUrl: './add-sessions.component.scss',
})
export class AddSessionsComponent {
  addSessionForm: FormGroup;
  get sequenceId() {
    return this.addSessionForm.get('sequenceId') as FormControl;
  }

  get sequenceName() {
    return this.addSessionForm.get('sequenceName') as FormControl;
  }

  get sequenceSession() {
    return this.addSessionForm.get('sequenceSession') as FormControl;
  }

  get sequenceDuration() {
    return this.addSessionForm.get('sequenceDuration') as FormControl;
  }

  get Level() {
    return this.addSessionForm.get('Level') as FormControl;
  }

  get sequenceDescription() {
    return this.addSessionForm.get('sequenceDescription') as FormControl;
  }
  isValid() {
    return (
      this.addSessionForm.value.sequenceId &&
      this.addSessionForm.value.sequenceName &&
      this.addSessionForm.value.sequenceSession &&
      this.addSessionForm.value.sequenceDuration &&
      this.addSessionForm.value.Level &&
      this.addSessionForm.value.sequenceDescription
    );
  }
  constructor(
    private activateroute: ActivatedRoute,
    private router: Router,
    private sessionsService: WorkshopsService,
    private toastService: ToastService,
    private fb: FormBuilder
  ) {
    this.addSessionForm = this.fb.group(
      {
        sequenceId: [
          '', // initial value of the input
          [
            // the list of validators
            Validators.required,
            Validators.pattern('\\d+'),
          ],
        ],
        sequenceName: [
          '',
          [Validators.required, Validators.pattern('[A-Z][A-Za-z ]+')],
        ],
        sequenceSession: [
          '',
          [
            Validators.required,
            Validators.pattern('[A-Z][A-Za-z ]+(,[A-Z ][A-Za-z ]+)*'),
          ],
        ],
        sequenceDuration: [
          '',
          [Validators.required, Validators.min(0.5), Validators.max(10)],
        ],
        Level: ['', [Validators.required]],
        sequenceDescription: [
          '',
          [Validators.required, Validators.minLength(20)],
        ],
      },
      {
        validators: durationAndLevel,
      }
    );
  }
  addSession() {
    let idStr: number = 0;
    if (this.activateroute.snapshot.parent) {
      idStr = +(this.activateroute.snapshot.parent.paramMap.get(
        'id'
      ) as string);
    }
    if (this.isValid()) {
      const newSession = {
        ...this.addSessionForm.value,
        sequenceId: +this.addSessionForm.value.sequenceId,
      };
      console.log(newSession);
      let newAddedSession: ISessions;
      newAddedSession = {
        workshopId: idStr,
        sequenceId: newSession.sequenceId,
        name: newSession.sequenceName,
        speaker: newSession.sequenceSession,
        duration: newSession.sequenceDuration,
        level: newSession.Level,
        abstract: newSession.sequenceDescription,
        upvoteCount: 0,
      };
      this.sessionsService.addSessions(newAddedSession).subscribe({
        next: (addedSession) => {
          this.toastService.add({
            message: `Added session with id = ${addedSession.name}`,
            className: 'success',
            duration: 5000,
          });
          alert(`Added session with id = ${addedSession.id}`);
          this.router.navigate(['/workshops', idStr]);
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
  }
}
