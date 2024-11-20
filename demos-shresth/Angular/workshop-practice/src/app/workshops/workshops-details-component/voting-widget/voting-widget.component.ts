import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-voting-widget',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './voting-widget.component.html',
  styleUrl: './voting-widget.component.scss',
})
export class VotingWidgetComponent {
  @Input() upVoteCount!: number | null;

  @Output()
  upvote = new EventEmitter<'upvote' | 'downvote'>();

  icons = {
    faCaretUp,
    faCaretDown,
  };

  emitVote(by: 'upvote' | 'downvote') {
    this.upvote.emit(by);
  }
}
