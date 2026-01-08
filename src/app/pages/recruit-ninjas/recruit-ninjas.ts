import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Ninja } from '../../core/objects/ninja';
import { Observable } from 'rxjs';
import { SortableDirective } from '../../core/directives/sortable.directive';
import { NinjaService } from '../../core/services/ninja.service';
import { SortEvent } from '../../core/objects/sort-event';
import {
  NgbHighlight,
  NgbPagination,
  NgbPaginationNext,
  NgbPaginationPrevious,
} from '@ng-bootstrap/ng-bootstrap';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { Clipboard } from '@angular/cdk/clipboard';
import swal from 'sweetalert2';

@Component({
  selector: 'app-recruit-ninjas',
  imports: [
    FormsModule,
    AsyncPipe,
    NgbHighlight,
    SortableDirective,
    NgbPagination,
    TranslocoModule,
    NgbPaginationPrevious,
    NgbPaginationNext,
    CommonModule,
    TranslocoModule,
    ReactiveFormsModule,
  ],
  templateUrl: './recruit-ninjas.html',
  styleUrl: './recruit-ninjas.scss',
})
export class RecruitNinjas implements OnInit {
  ninjas$: Observable<Ninja[]>;
  total$: Observable<number>;
  search: FormControl = new FormControl('', [Validators.maxLength(100)]);

  @ViewChildren(SortableDirective) headers: QueryList<SortableDirective>;

  constructor(
    public service: NinjaService,
    private clipboard: Clipboard,
    private transLocoService: TranslocoService
  ) {
    this.ninjas$ = service.ninjas$;
    this.total$ = service.total$;
  }

  ngOnInit(): void {
    this.search.valueChanges.subscribe((value) => {
      if (this.search.valid) {
        this.service.searchTerm = value;
      }
    });
  }

  public resetSearch(): void {
    this.search.reset();
    this.service.searchTerm = '';
  }

  public copyId(ninja: Ninja): void {
    let success: boolean = this.clipboard.copy(ninja.id);
    const Toast = swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = swal.stopTimer;
        toast.onmouseleave = swal.resumeTimer;
        toast.addEventListener('click', () => swal.close());
      },
    });
    Toast.fire({
      icon: success ? 'success' : 'error',
      title: success
        ? `¡${ninja.name} ${this.transLocoService.translate('recruit-ninjas.successCopy')}!`
        : this.transLocoService.translate('recruit-ninjas.errorCopy'),
    });
  }

  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}
