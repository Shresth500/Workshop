import { Component, Input, OnInit } from '@angular/core';
import { WorkshopsService } from '../../workshops.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ISessions } from '../../models/IWorkshop';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { VotingWidgetComponent } from '../voting-widget/voting-widget.component';
import { SearchBarComponent } from '../../../common/search-bar/search-bar.component';

@Component({
  selector: 'app-session-list',
  standalone: true,
  imports: [
    NgbAlertModule,
    NgbAccordionModule,
    CommonModule,
    FontAwesomeModule,
    VotingWidgetComponent,
    SearchBarComponent,
  ],
  templateUrl: './session-list.component.html',
  styleUrl: './session-list.component.scss',
})
export class SessionListComponent implements OnInit {
  isWrittenSession: boolean = true;
  params!: number | null;
  loading = true;
  Sessions!: Required<ISessions>[];
  filteredSessions!: Required<ISessions>[];
  error: Error | null = null;
  constructor(
    private w: WorkshopsService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.params = +this.activatedRoute.snapshot.paramMap.get('id')!;
    this.getSessionDetails();
  }
  trackBySessionId(index: number, session: any): number {
    return session.id; // Use the 'id' of the workshop to track it
  }
  getSessionDetails() {
    if (this.params) {
      this.w.getSessions(this.params).subscribe({
        next: (workshopSessions) => {
          this.loading = false;
          this.Sessions = workshopSessions;
          this.filteredSessions = workshopSessions;
          console.log(this.Sessions);
        },
      });
    }
  }
  updateVote(session: ISessions, vote: 'upvote' | 'downvote') {
    if (session.id)
      this.w.voteForSessions(session.id, vote).subscribe({
        next: (updatedSession) => {
          session.upvoteCount = updatedSession.upvoteCount;
        },
      });
  }
  getSearchedData(sessions: Required<ISessions>[]) {
    this.Sessions = sessions;
  }
}
