import { Component, inject, TemplateRef } from '@angular/core';
import { WorkshopsService } from '../workshops.service';
import { IWorkshop } from '../models/IWorkshop';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from '../../common/loading-spinner/loading-spinner.component';
import { ErrorAlertComponent } from '../../common/error-alert/error-alert.component';
import { ItemComponent } from './item/item.component';
import { PaginationComponent } from '../../common/pagination/pagination.component';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastService } from '../../common/toast/toast.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchBarComponent } from '../../common/search-bar/search-bar.component';

interface Categorieslist {
  category: string;
  color: string;
}

@Component({
  selector: 'app-workshop-list',
  standalone: true,
  imports: [
    CommonModule,
    LoadingSpinnerComponent,
    ErrorAlertComponent,
    ItemComponent,
    PaginationComponent,
    FormsModule,
    ReactiveFormsModule,
    SearchBarComponent,
  ],
  templateUrl: './workshop-list.component.html',
  styleUrl: './workshop-list.component.scss',
})
export class WorkshopListComponent {
  colors = [
    'btn-primary',
    'btn-secondary',
    'btn-success',
    'btn-danger',
    'btn-info',
    'btn-warning',
    'btn-light',
    'btn-dark',
  ];
  isWrittenWorkshop: boolean = true;
  categoryList: Categorieslist[] = [];
  filterKey: string = '';
  filteredWorkshop!: IWorkshop[];
  private modalService = inject(NgbModal);
  closeResult = '';
  loading = true;
  error: Error | null = null;
  workshops!: IWorkshop[];
  page: number = 1;
  page_limit: number = Number.MAX_VALUE;
  page_1: boolean = true;
  page_2: boolean = true;
  page_3: boolean = true;
  is_alert_delete = false;
  deleted_confirmed = false;

  ngOnInit(): void {}
  // Define trackBy function
  trackByWorkshopId(index: number, workshop: any): number {
    return workshop.id; // Use the 'id' of the workshop to track it
  }
  constructor(
    private w: WorkshopsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastService: ToastService
  ) {
    this.activatedRoute.queryParamMap.subscribe({
      next: (queryParams) => {
        const queryStr = queryParams.get('page');
        if (queryStr === null) {
          this.page = 1;
        } else {
          this.page = +queryStr;
        }
        this.getData();
      },
    });
  }
  getData() {
    this.loading = true;
    this.w.getWorkshops(this.page).subscribe({
      next: (workshop) => {
        if (workshop.length === 0) {
          this.categoryList = [];
          this.error = new Error('Page Not found');
          this.loading = false;
          this.page_limit = this.page;
        } else {
          this.router.navigate(['/workshops'], {
            queryParams: {
              page: this.page,
            },
          });
          this.error = null;
          this.filteredWorkshop = [...workshop];
          let category_set = new Set();
          this.filteredWorkshop.forEach((workshop) => {
            category_set.add(workshop.category);
          });
          this.categoryList = [];
          let i = 0;
          category_set.forEach((workshop) => {
            if (workshop) {
              let cat: Categorieslist = {
                category: workshop as string,
                color: this.colors[i % this.colors.length],
              };
              this.categoryList.push(cat);
              i++;
            }
          });
          this.workshops = [...workshop];
          this.loading = false;
        }
      },
      error: (error) => {
        this.error = error;
        this.loading = false;
      },
    });
  }
  updateData() {}
  pagination(page_add: number) {
    if (page_add === this.page_limit) {
      this.categoryList = [];
    }
    this.page = page_add;
    this.router.navigate(['/workshops'], { queryParams: { page: this.page } });
    //this.getData();
  }

  pagination_by_id(new_page: number) {
    this.page = new_page;
    this.router.navigate(['/workshops'], { queryParams: { page: this.page } });
  }

  deleteWorkshop(workshop: IWorkshop) {
    this.w.deleteWorkshopById(workshop.id).subscribe({
      next: () => {
        this.toastService.add({
          message: `Successfully Deleted ${workshop}`,
          className: 'success',
          duration: 5000,
        });
        this.workshops = this.workshops.filter(
          (workshopitem) => workshopitem !== workshop
        );
      },
    });
  }
  open(content: TemplateRef<any>, workshop: IWorkshop) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then((result) => {
        if (result === 'ok') {
          console.log('We have deleted the workshop');
          this.deleteWorkshop(workshop);
        } else {
          console.log('we have not deleted the workshop');
        }
      });
  }

  getSearchedData(searchedWorkshop: IWorkshop[]) {
    this.workshops = searchedWorkshop;
  }

  filterbyCategory(category: string) {
    if (category === '') {
      this.workshops = this.filteredWorkshop;
      return;
    }
    this.w.getDatabyCategory(category).subscribe({
      next: (workshop) => {
        this.workshops = workshop;
      },
    });
  }
}
