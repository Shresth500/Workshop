import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IWorkshop } from '../../models/IWorkshop';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { LocationPipe } from '../../../common/location/location.pipe';
import { RouterOutlet, RouterLink } from '@angular/router';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [
    CommonModule,
    DatePipe,
    LocationPipe,
    RouterOutlet,
    RouterLink,
    FontAwesomeModule,
  ],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  @Input() workshop!: IWorkshop;
  @Output()
  delete = new EventEmitter();

  icons = {
    faPencil,
    faTrash,
  };
  onDeleteWorkshop() {
    this.delete.emit();
  }
}
